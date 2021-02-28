import React, { useState } from 'react';
import CardActions from '@material-ui/core/CardActions';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

import '../styles/BeerCardExpanded.css';

export const BeerCardExpanded = ({ beer }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleIconClick = e => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='beer-card'>
      <CardActions className='favorite-icon'>
        <IconButton aria-label='add to favorites'>
          {!isFavorite ? (
            <FavoriteBorderIcon onClickCapture={e => handleIconClick(e)} />
          ) : (
            <FavoriteIcon onClickCapture={e => handleIconClick(e)} />
          )}
        </IconButton>
      </CardActions>

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
        <p className='beer-description'>{beer.description}</p>
      </section>

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
