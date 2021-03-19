import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const buttonStyle = {
  margin: '2rem 0',
  padding: '1rem 2rem',
  width: '120px',
  cursor: 'pointer',
};

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    !isAuthenticated && (
      <button style={buttonStyle} onClick={() => loginWithRedirect()}>
        Log In
      </button>
    )
  );
};

export default Login;
