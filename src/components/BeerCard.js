import React, { useState } from 'react';
import CardActions from '@material-ui/core/CardActions';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';
import '../styles/BeerCard.css';

const favoriteButtonStyle = {
  width: '48px',
  height: '48px',
};

export const BeerCard = ({ beer, handleOpen }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleIconClick = e => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='card' onClick={() => handleOpen(beer.id)}>
      <div className='image-container'>
        <img src={beer.image_url} alt={beer.name} />
      </div>

      <div className='info-container'>
        <section className='top-part'>
          <section className='left-side'>
            <p className='beer-name'>{beer.name}</p>
            <p className='beer-tagline'>
              <i>{beer.tagline}</i>
            </p>
          </section>
          <CardActions style={favoriteButtonStyle}>
            <IconButton aria-label='add to favorites'>
              {!isFavorite ? (
                <FavoriteBorderIcon onClickCapture={e => handleIconClick(e)} />
              ) : (
                <FavoriteIcon onClickCapture={e => handleIconClick(e)} />
              )}
            </IconButton>
          </CardActions>
        </section>
        <p className='beer-description'>{beer.description}</p>
      </div>
    </div>
  );
};
