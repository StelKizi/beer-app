import React, { useState } from 'react';
import '../styles/BeerCard.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

export const BeerCard = ({ beer }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleIconClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='card'>
      <div className='image-container'>
        <img src={beer.image_url} alt={beer.name} />
      </div>

      <div className='info-container'>
        <section className='name-tagline'>
          <p className='beer-name'>{beer.name}</p>
          <p className='beer-tagline'>
            <i>{beer.tagline}</i>
          </p>
        </section>
        <p className='beer-description'>{beer.description}</p>
        {isFavorite ? (
          <FavoriteBorderIcon onClick={handleIconClick} />
        ) : (
          <FavoriteIcon onClick={handleIconClick} />
        )}
      </div>
    </div>
  );
};
