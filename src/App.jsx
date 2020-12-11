import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'components/Home';
import SignUp from 'components/SignUp';
import Login from 'components/Login';
import SidebarLayout from 'components/SidebarLayout';

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      setUser(user);
    }
  }, []);

  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
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
