import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BeerCardExpanded } from './BeerCardExpanded';
import '../styles/Home.css';
import '../styles/BeerCardExpanded.css';

export const Home = () => {
  const [beers, setBeers] = useState([]);

  const fetchBeerData = async () => {
    try {
      const { data } = await axios.get(
        'https://api.punkapi.com/v2/beers?per_page=9'
      );
      console.log(data);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBeerData().then(data => {
      setBeers(data);
    });
  }, []);

  return (
    <div className='beer-container'>
      {beers.map(beer => (
        <BeerCardExpanded key={`${beer.id}-${beer.name}`} beer={beer} />
      ))}
    </div>
  );
};
