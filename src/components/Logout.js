import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const buttonStyle = {
  margin: '1rem 0 0 2rem',
  padding: '1rem 2rem',
  width: '120px',
  cursor: 'pointer',
  display: 'inline-block',
};

const Login = () => {
  const { logout } = useAuth0();

  return (
    <button style={buttonStyle} onClick={() => logout()}>
      Log Out
    </button>
  );
};

export default Login;
