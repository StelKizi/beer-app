import React from 'react';
import '../styles/BeerCard.css';

export const BeerCard = ({ beer }) => {
  return (
    <div className='card'>
      <div>
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <section>
        <p>{beer.name}</p>
        <p>{beer.tagline}</p>
      </section>
    </div>
  );
};
