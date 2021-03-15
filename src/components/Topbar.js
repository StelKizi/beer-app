import React from 'react';
import { Search } from './Search';
import { Nav } from './Nav';

import '../styles/Topbar.css';

export const Topbar = ({ beers, favoriteBeers }) => {
  return (
    <div className='topbar'>
      <Search beers={beers} favoriteBeers={favoriteBeers} />
      <Nav />
    </div>
  );
};
