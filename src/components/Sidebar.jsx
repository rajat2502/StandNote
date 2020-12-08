import React, { useState, useEffect } from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';

const Sidebar = ({ user, setUser }) => {
  const history = useHistory();
  const location = useLocation();
  const [selected, setSelected] = useState('');

  const logOut = () => {
    localStorage.clear();
    setUser({});
    history.push('/');
  };

  useEffect(() => {
    setSelected(location.pathname);
  }, [location]);

  return (
    <div
      className='fixed p-4 flex bg-gray-50 flex-col justify-between h-full'
      style={{ width: 280 }}
    >
      <div>
        <img
          className='mx-auto'
          src={require('assets/logo.png').default}
          alt='StandNote'
        />
        <div className='mt-4 flex flex-col'>
          <Link
            to='/'
            className='mt-2 cursor-pointer p-2 font-medium text-gray-800 text-sm hover:bg-gray-200 rounded'
          >
            Home
          </Link>
          <Link
            id={selected === '/dashboard' ? 'selected-link' : ''}
            to='/dashboard'
            className='mt-2 cursor-pointer p-2 font-medium text-gray-800 text-sm hover:bg-gray-200 rounded'
          >
            Dashboard
          </Link>
          <Link
            id={selected === '/integrations' ? 'selected-link' : ''}
            to='/integrations'
            className='mt-2 cursor-pointer p-2 font-medium text-gray-800 text-sm hover:bg-gray-200 rounded'
          >
            Integrations
          </Link>
          <Link
            id={selected === '/tips' ? 'selected-link' : ''}
            to='/tips'
            className='mt-2 cursor-pointer p-2 font-medium text-gray-800 text-sm hover:bg-gray-200 rounded'
          >
            StandNote Usage Tips
          </Link>
        </div>
      </div>
      <div className='flex text-center flex-col text-sm'>
        <p>{user.email}</p>
        <span className='text-gray-600'>●</span>
        <button onClick={logOut} className='text-blue-600 focus:outline-none'>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
