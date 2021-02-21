import React, { useState } from 'react';
import '../styles/BeerCard.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

import '../styles/BeerCardExpanded.css';

export const BeerCard = ({ beer }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleIconClick = e => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <>
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
        </div>
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
      </div>

      <div className='beer-card-expanded'>
        <section className='top'>
          <img src={beer.image_url} alt={beer.name} />
          <section className='info'>
            <p className='beer-name'>{beer.name}</p>
            <p className='beer-tagline'>
              <i>{beer.tagline}</i>
            </p>
          </section>
          <p className='beer-description'>{beer.description}</p>
        </section>
        <section>
          <p className='brewers-tips'>{beer.brewers_tips}</p>
          <p className='contributor'>{beer.contributed_by}</p>
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
    </>
  );
};
