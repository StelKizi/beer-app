import React from 'react';
import { Search } from './Search';
import { Nav } from './Nav';
import Logout from './Logout';

import '../styles/Topbar.css';

export const Topbar = ({
  beers,
  favoriteBeers,
  isFavorite,
  handleSetFavorite,
  handleRemoveFavorite,
}) => {
  return (
    <div className='topbar'>
      <Logout />
      <Search
        beers={beers}
        favoriteBeers={favoriteBeers}
        isFavorite={isFavorite}
        handleSetFavorite={handleSetFavorite}
        handleRemoveFavorite={handleRemoveFavorite}
      />
      <Nav />
    </div>
  );
};
