import React from 'react';

export const BeerCardExpanded = beer => {
  return (
    <div>
      <section className='top'>
        <img src={beer.image_url} alt={beer.name} />
        <section className='info'>
          <p className='beer-name'>{beer.name}</p>
          <p>{beer.tagline}</p>
        </section>
      </section>
      <p>{beer.description}</p>
      <section>
        <p className='brewers-tips'>{beer.brewers_tips}</p>
        <p className='contributor'>{beer.contributed_by}</p>
      </section>
      <section>
        <p>
          {
            beer.food_pairing /* .map((item, index) => (
            <span key={(item, index)}>{item}</span>
          )) */
          }
        </p>
      </section>
    </div>
  );
};
