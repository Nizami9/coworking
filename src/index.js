import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import {SpaceProvider} from './context/SpaceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <SpaceProvider>
        <App />
    </SpaceProvider>
    </AuthProvider>
  </React.StrictMode>
);