import React from 'react';
import GoogleLogin from 'react-google-login';

import Icon from 'components/Icon';

const Form = ({ formType, formButton }) => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <form className='w-full'>
      {formType === 'signup' && (
        <div className='mt-4'>
          <p className='text-gray-600 font-medium'>Full Name</p>
          <input
            className='border-gray-300 rounded border block w-full p-3 mt-2 text-gray-700 appearance-none focus:outline-none focus:border-gray-600'
            type='text'
            placeholder='Enter your Full Name'
          />
        </div>
      )}
      <div className='mt-4'>
        <p className='text-gray-600 font-medium'>Email Address</p>
        <input
          className='border-gray-300 rounded border block w-full p-3 mt-2 text-gray-700 appearance-none focus:outline-none focus:border-gray-600'
          type='email'
          placeholder='Enter your Email Address'
        />
      </div>
      <div className='mt-4'>
        <p className='text-gray-600 font-medium'>Password</p>
        <input
          className='border-gray-300 rounded border block w-full p-3 mt-2 text-gray-700 appearance-none focus:outline-none focus:border-gray-600'
          type='password'
          placeholder='Enter your Password'
        />
      </div>
      <input
        className='transition duration-500 ease-in-out focus:outline-none cursor-pointer rounded bg-green-600 hover:bg-green-700 w-full p-3 text-white font-bold mt-5'
        type='submit'
        value={formButton}
      />
      <p className='text-sm text-gray-600 w-full my-2 text-center'>OR</p>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
        render={(renderProps) => (
          <button
            className='font-bold rounded-sm focus:outline-none w-full border border-blue-500 flex justify-center items-center'
            style={{ height: 48 }}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
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
    </form>
  );
};

export default Form;
