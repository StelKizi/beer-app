import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BeerCard } from './BeerCard';
import Modal from 'react-modal';
import { BeerCardExpanded } from './BeerCardExpanded';
import '../styles/Home.css';
import '../styles/BeerCardExpanded.css';

import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

Modal.setAppElement('#root');

/* import CloseRoundedIcon from '@material-ui/icons/CloseRounded'; */

export const Home = () => {
  const [beers, setBeers] = useState([]);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  /* const expandedCardRef = useRef(null); */

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

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleIconClick = e => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className='beer-container'>
      {beers.map(beer => (
        <>
          <BeerCard
            key={`${beer.id}-${beer.name}`}
            beer={beer}
            openModal={openModal}
          />
          <Modal
            isOpen={isOpen}
            key={`${beer.id}-${beer.name}=modal`}
            contentLabel='Example Modal'
            className='Modal'
            overlayClassName='Overlay'
          >
            <BeerCardExpanded beer={beer} closeModal={closeModal} />
          </Modal>
        </>
      ))}
    </div>
  );
};
