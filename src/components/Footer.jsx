import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <div className='flex justify-between flex-col md:flex-row px-4 py-6 bg-gray-900 text-white'>
        <div>
          <img
            src={require('assets/logo.png').default}
            className='my-2 mx-auto md:mx-0 h-16'
            alt='Logo'
          />
          <div className='mt-4 flex justify-around'>
            <a
              href='https://github.com/rajat2502/StandNote'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                className='h-6 m-auto mb-1 w-auto flex-shrink-1'
                alt='Star'
                src={require('assets/github.png').default}
              />
              GitHub Repository
            </a>
            <a href='mailto:standnote@gmail.com'>
              <img
                className='h-6 m-auto mb-1 w-auto flex-shrink-1'
                alt='Email'
                src='https://img.icons8.com/fluent/48/000000/gmail.png'
              />
              Email us
            </a>
          </div>
        </div>
        <div className='mt-4 flex flex-row md:flex-col flex-wrap'>
          <Link to='/' className='mx-2 text-lg hover:underline'>
            Home
          </Link>
          <a
            className='mx-2 text-lg hover:underline'
            href='https://github.com/rajat2502/StandNote/wiki/How-to-use-StandNote%3F'
            rel='noreferrer'
            target='_blank'
          >
            How to use
          </a>
          <Link to='/login' className='mx-2 text-lg hover:underline'>
            Login
          </Link>
          <Link to='/privacy-policy' className='mx-2 text-lg hover:underline'>
            Privacy Policy
          </Link>
          <Link className='mx-2 text-lg hover:underline' to='/integrations'>
            Integrations
          </Link>
        </div>
      </div>
      <div className='text-center bg-gray-800 p-2'>
        <p className='text-gray-200 text-center'>
          MIT License © Copyright 2020 StandNote.
        </p>
      </div>
    </>
  );
}

export default Footer;
