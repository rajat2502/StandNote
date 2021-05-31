import React, { useState, useEffect } from 'react';
import { useHistory, Link, useLocation } from 'react-router-dom';

import Icon from './Icon';

const Sidebar = ({ user, setUser }) => {
  const history = useHistory();
  const location = useLocation();
  const [selected, setSelected] = useState('');
  const [sidebarOpen, setSidebarOpenState] = useState(false);

  const logOut = () => {
    localStorage.clear();
    setUser({});
    history.push('/');
  };

  const changeSideBarState = () => setSidebarOpenState((state) => !state);

  useEffect(() => {
    setSelected(location.pathname);
    setSidebarOpenState(false);
  }, [location]);

  console.log(sidebarOpen);
  return (
    <>
      <span
        className='toggler absolute cursor-pointer top-2 right-2 z-10'
        onClick={changeSideBarState}
      >
        <Icon name='toggler' />
      </span>
      <div
        className='sidebar fixed p-4 flex bg-gray-50 flex-col justify-between h-full'
        style={sidebarOpen ? { left: 0 } : {}}
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
              className='mt-2 cursor-pointer p-2 text-gray-800 font-bold hover:bg-gray-200 rounded'
            >
              Home
            </Link>
            <Link
              id={selected === '/dashboard' ? 'selected-link' : ''}
              to='/dashboard'
              className='mt-2 cursor-pointer p-2 text-gray-800 font-bold hover:bg-gray-200 rounded'
            >
              Dashboard
            </Link>
            <Link
              id={selected === '/integrations' ? 'selected-link' : ''}
              to='/integrations'
              className='mt-2 cursor-pointer p-2 text-gray-800 font-bold hover:bg-gray-200 rounded'
            >
              Integrations
            </Link>
            <Link
              id={selected === '/tips' ? 'selected-link' : ''}
              to='/tips'
              className='mt-2 cursor-pointer p-2 text-gray-800 font-bold hover:bg-gray-200 rounded'
            >
              StandNote Usage Tips
            </Link>
          </div>
        </div>
        <div className='flex text-center flex-col text'>
          <p>{user.email}</p>
          <span className='text-gray-800'>●</span>
          <div>
            <Link className='text-blue-600' to='/privacy-policy'>
              Privacy Policy
            </Link>
            <span>&nbsp; | &nbsp;</span>
            <button
              onClick={logOut}
              className='text-blue-600 focus:outline-none'
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
