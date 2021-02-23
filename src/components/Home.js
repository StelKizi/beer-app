import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { BeerCard } from './BeerCard';
import { BeerCardExpanded } from './BeerCardExpanded';
import '../styles/Home.css';

/* import CloseRoundedIcon from '@material-ui/icons/CloseRounded'; */
import '../styles/BeerCardExpanded.css';

export const Home = () => {
  const [beers, setBeers] = useState([]);
  const expandedCardRef = useRef(null);

  const fetchBeerData = () => {
    return axios
      .get('https://api.punkapi.com/v2/beers?per_page=9')
      .then(({ data }) => {
        // handle success
        console.log(data);
        return data;
      })
      .catch(err => {
        // handle error
        console.log(err);
      });
  };

  useEffect(() => {
    fetchBeerData().then(data => {
      setBeers(data);
    });
  }, []);

  const handleExpandCard = () => {
    expandedCardRef.current.classList.add('is-expanded');
  };

  /* const handleCloseExpandedCard = () => {
    expandedCardRef.current.classList.add('is-not-expanded');
  }; */

  return (
    <div className='beer-container'>
      {beers.map(beer => (
        <>
          <BeerCard
            key={`${beer.id}-${beer.name}`}
            beer={beer}
            onClick={handleExpandCard}
          />
          <BeerCardExpanded
            key={`${beer.id}-${beer.name}-expanded`}
            beer={beer}
            innerRef={expandedCardRef}
            /* closeCard={handleCloseExpandedCard} */
          />
        </>
      ))}
    </div>
  );
};
