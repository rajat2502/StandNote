import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='flex items-center justify-between py-2 px-4 bg-green-500 text-white font-bold'>
      <Link to='/'>
        <img
          className='h-12'
          src={require('assets/logo-white.png').default}
          alt='Standnote'
        />
      </Link>
      <div>
        <Link className='mx-2' to='/'>
          Home
        </Link>
        <Link className='mx-2' to='/dashboard'>
          Dashboard
        </Link>
        <Link className='mx-2' to='/login'>
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
