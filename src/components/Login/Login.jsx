import React from 'react';
import { Link } from 'react-router-dom';

import Form from 'components/Form';

function Login() {
  return (
    <div className='flex justify-center items-center w-full h-screen bg-gray-200'>
      <div
        className='m-4 w-full sm:w-2/3 rounded-md shadow-lg	flex justify-center items-center flex-col bg-white p-12'
        style={{ maxWidth: 450 }}
      >
        <Link to='/'>
          <img
            className='h-16 mb-4'
            src={require('assets/logo.png').default}
            alt='Standnote'
          />
        </Link>
        <Form formButton='Sign In' />
        <p className='block text-gray-600 mt-2 text-left'>
          Don't have an Account?{' '}
          <Link className='text-blue-600' to='/register'>
            Create Now!
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
