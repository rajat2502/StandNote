import React from 'react';
import ReactDOM from 'react-dom';

import 'styles/output.css';

import App from './App';

// Render React in Strict mode
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
