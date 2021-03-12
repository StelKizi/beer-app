import React from 'react';
import { Search } from './Search';
import { Nav } from './Nav';

import '../styles/Topbar.css';

export const Topbar = ({ beers }) => {
  return (
    <div className='topbar'>
      <Search beers={beers} />
      <Nav />
    </div>
  );
};
