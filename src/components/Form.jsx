import React from 'react';

import Icon from 'components/Icon';

function Form({ formButton }) {
  return (
    <form className='w-full'>
      <div className='mt-4'>
        <p className='text-gray-600 font-medium'>Email Address</p>
        <input
          className='border-gray-300 rounded border block w-full p-3 mt-2 text-gray-700 appearance-none focus:outline-none focus:border-gray-600'
          type='text'
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
      <p className='text-gray-600 w-full my-2 text-center'>OR</p>
      <button className='font-bold rounded-sm focus:outline-none w-full border border-blue-500 flex justify-center items-center'>
        &nbsp;&nbsp;&nbsp;
        <Icon name='google' width='32' />
        &nbsp;&nbsp;&nbsp;
        <span className='w-full bg-blue-500 text-white p-3'>
          Continue with Google
        </span>
      </button>
    </form>
  );
}

export default Form;
