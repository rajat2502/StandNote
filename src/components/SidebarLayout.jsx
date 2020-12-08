import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Sidebar from 'components/Sidebar';
import Dashboard from 'components/Dashboard';
import Integrations from 'components/Integrations';
import StandNoteTips from 'components/StandNoteTips';

const SidebarLayout = ({ user, setUser }) => {
  if (!user.email) return <Redirect to='login' />;

  return (
    <>
      <Sidebar user={user} setUser={setUser} />
      <div
        className='relative p-4 bg-gray-200'
        style={{ width: 'calc(100% - 280px)', minHeight: '100vh', left: 280 }}
      >
        <Route path='/dashboard' exact component={Dashboard} />
        <Route path='/integrations' exact component={Integrations} />
        <Route path='/tips' exact component={StandNoteTips} />
      </div>
    </>
  );
};

export default SidebarLayout;
