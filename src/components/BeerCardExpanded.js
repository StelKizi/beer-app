import React from 'react';
import CardActions from '@material-ui/core/CardActions';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

import '../styles/BeerCardExpanded.css';

export const BeerCardExpanded = /* React.forwardRef */ (
  { beer, handleSetFavorite, handleRemoveFavorite, ...props },
  ref
) => {
  const handleIconClick = (e, id) => {
    e.stopPropagation();

    if (!props.isFavorite) {
      handleSetFavorite(id);
    } else {
      handleRemoveFavorite(id);
    }
  };

  return (
    <div className='beer-card' /*  */>
      <CardActions className='favorite-icon'>
        <IconButton aria-label='add to favorites'>
          {!props.isFavorite ? (
            <FavoriteBorderIcon
              onClickCapture={e => handleIconClick(e, beer.id)}
            />
          ) : (
            <FavoriteIcon onClickCapture={e => handleIconClick(e, beer.id)} />
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
            <p>First brewed: {beer.first_brewed}</p>
          </section>
        </section>
      </section>

      <section>
        <p className='beer-expanded-description'>{beer.description}</p>
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
