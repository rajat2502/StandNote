import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import { useHistory } from 'react-router-dom';

import { googleLogin, login, register } from 'api';

import Icon from 'components/Icon';

const Form = ({ formType, formButton, setUser }) => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  // google response
  const responseGoogle = async (response) => {
    setError('');
    setIsDisabled(true);
    const res = await googleLogin(response.accessToken);
    if (!res.err) {
      localStorage.setItem(
        'user',
        JSON.stringify({ email: response.profileObj.email, token: res.key })
      );
      setUser({ email: response.profileObj.email });
      history.push('/dashboard');
    } else {
      setError(res.err);
    }
    setIsDisabled(false);
  };

  // check if credentials are valid
  const isValid = () => {
    if (formType === 'login') return email && password;
    else return email && password && password === confirmPassword;
  };

  // Submit credentials and login/signup user
  const submitForm = async (e) => {
    e.preventDefault();

    if (isValid()) {
      setError('');
      setIsDisabled(true);
      const user = { email };
      let res;
      if (formType === 'signup') {
        user.password1 = password;
        user.password2 = confirmPassword;
        res = await register(user);
      } else {
        user.password = password;
        res = await login(user);
      }
      if (!res.err) {
        localStorage.setItem('user', JSON.stringify({ email, token: res.key }));
        setUser({ email });
        history.push('/dashboard');
      } else {
        setError(res.err);
      }
      setIsDisabled(false);
    } else {
      setError('Please check the details!');
    }
  };

  return (
    <form className='w-full' onSubmit={submitForm}>
      <div className='mt-4'>
        <p className='text-gray-600 font-medium'>Email Address</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='border-gray-300 rounded border block w-full p-3 mt-2 text-gray-700 appearance-none focus:outline-none focus:border-gray-600'
          type='email'
          placeholder='Enter your Email Address'
        />
      </div>
      <div className='mt-4'>
        <p className='text-gray-600 font-medium'>Password</p>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border-gray-300 rounded border block w-full p-3 mt-2 text-gray-700 appearance-none focus:outline-none focus:border-gray-600'
          type='password'
          placeholder='Enter your Password'
        />
      </div>
      {formType === 'signup' && (
        <div className='mt-4'>
          <p className='text-gray-600 font-medium'>Confirm Password</p>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className='border-gray-300 rounded border block w-full p-3 mt-2 text-gray-700 appearance-none focus:outline-none focus:border-gray-600'
            type='password'
            placeholder='Confirm your Password'
          />
        </div>
      )}
      <button
        className='focus:outline-none cursor-pointer rounded bg-green-600 w-full p-3 text-white font-bold mt-5'
        type='submit'
        disabled={isDisabled}
      >
        {formButton}
      </button>
      <p className='text-sm text-gray-600 w-full my-2 text-center'>OR</p>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
        render={(renderProps) => (
          <button
            className='font-bold rounded-sm focus:outline-none w-full border border-blue-500 flex justify-center items-center'
            style={{ height: 48 }}
            onClick={renderProps.onClick}
            disabled={isDisabled}
          >
            &nbsp;&nbsp;&nbsp;
            <Icon name='google' width='32' />
            &nbsp;&nbsp;&nbsp;
            <span className='w-full bg-blue-500 text-white h-full flex items-center justify-center'>
              Continue with Google
            </span>
          </button>
        )}
        buttonText='Login'
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
      {error && <p className='mt-1 text-sm text-red-500'>{error}</p>}
    </form>
  );
};

export default Form;
