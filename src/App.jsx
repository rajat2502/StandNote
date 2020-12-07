import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'components/Home';
import Dashboard from 'components/Dashboard';
import SignUp from 'components/SignUp';
import Login from 'components/Login';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/register' exact component={SignUp} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
