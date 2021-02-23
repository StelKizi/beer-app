import React, { useState } from 'react';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import '../styles/BeerCardExpanded.css';

export const BeerCardExpanded = ({ beer, closeCard }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleIconClick = e => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='beer-card-expanded'>
      <span className='favorite'>
        Add to favorites{' '}
        {!isFavorite ? (
          <FavoriteBorderIcon
            onClickCapture={e => handleIconClick(e)}
            className='favorite-icon'
          />
        ) : (
          <FavoriteIcon
            onClickCapture={e => handleIconClick(e)}
            className='favorite-icon'
          />
        )}
      </span>
      <CloseRoundedIcon className='close-expanded-card' onClick={closeCard} />
      <section className='top'>
        <section className='image-name-tagline'>
          <img src={beer.image_url} alt={beer.name} />
          <section className='right-side'>
            <p className='beer-name'>{beer.name}</p>
            <p className='beer-tagline'>
              <i>{beer.tagline}</i>
            </p>
          </section>
        </section>
      </section>
      <p className='beer-description'>{beer.description}</p>

      <section>
        <p className='food-pairing'>
          <i>
            Pairs best with:
            {beer.food_pairing.map((item, index) => (
              <span key={(item, index)}> ☆{item} </span>
            ))}
          </i>
        </p>
      </section>
    </div>
  );
};
