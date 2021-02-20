import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css';

export const Nav = () => {
  return (
    <nav>
      <h4>
        <Link to='/'>Home</Link>
      </h4>
      <h4>
        <Link to='/favorites'>Favorites</Link>
      </h4>
    </nav>
  );
};
