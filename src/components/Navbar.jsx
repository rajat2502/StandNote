import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='md:flex md:items-center md:justify-between py-2 px-4 bg-green-500 text-white font-bold'>
      <Link to='/'>
        <img
          className='h-12'
          src={require('assets/logo-white.png').default}
          alt='Standnote'
        />
      </Link>
      <nav>
        <ul className='list-reset md:flex md:items-center'>
          <li className='md:ml-4'>
            <Link
              className='block no-underline py-2 md:border-none md:p-0 font-bold'
              to='/'
            >
              Home
            </Link>
          </li>
          <li className='md:ml-4'>
            <Link
              className='border-t block no-underline py-2 md:border-none md:p-0 font-bold'
              to='/dashboard'
            >
              Dashboard
            </Link>
          </li>
          <li className='md:ml-4'>
            <Link
              className='border-t block no-underline py-2 md:border-none md:p-0 font-bold'
              to='/integrations'
            >
              Integrations
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
