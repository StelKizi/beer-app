import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';

const { REACT_APP_DOMAIN } = process.env;
const { REACT_APP_CLIENT_ID } = process.env;

ReactDOM.render(
  <Router>
    <Auth0Provider
      domain={REACT_APP_DOMAIN}
      clientId={REACT_APP_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </Router>,
  document.getElementById('root')
);
