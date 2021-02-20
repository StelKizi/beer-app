import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BeerCard } from './BeerCard';
import '../styles/Home.css';

export const Home = () => {
  const [beers, setBeers] = useState([]);

  const fetchBeerData = () => {
    return axios
      .get('https://api.punkapi.com/v2/beers')
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

  return (
    <div className='beer-container'>
      {beers.map(beer => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
};
