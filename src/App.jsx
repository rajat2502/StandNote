import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ScrollToTop from 'utils/ScrollToTop';

import Home from 'components/Home';
import SignUp from 'components/SignUp';
import Login from 'components/Login';
import SidebarLayout from 'components/SidebarLayout';
import FullContent from 'components/FullContent';
import Privacy from 'components/PrivacyPolicy/Privacy';

function App() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  // Set user state
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user);
    }
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        <img
          className='h-28'
          src={require('assets/loader.gif').default}
          alt='standnote-loader'
        />
      </div>
    );
  }

  return (
    <div className='app font-sans'>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route
            path='/'
            exact
            render={(props) => (
              <Home user={user} setUser={setUser} {...props} />
            )}
          />
          <Route
            path='/register'
            exact
            render={(props) => (
              <SignUp user={user} setUser={setUser} {...props} />
            )}
          />
          <Route
            path='/login'
            exact
            render={(props) => (
              <Login user={user} setUser={setUser} {...props} />
            )}
          />
          <Route path='/privacy-policy' render={Privacy} />
          <Route path='/fullContent' render={FullContent} />
          <Route
            render={(props) => (
              <SidebarLayout user={user} setUser={setUser} {...props} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
