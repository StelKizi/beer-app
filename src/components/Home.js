import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BeerCardExpanded } from './BeerCardExpanded';
import { BeerCard } from './BeerCard';

import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import '../styles/Home.css';
import { DialogContent } from '@material-ui/core';
/* import '../styles/BeerCardExpanded.css'; */

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const Home = () => {
  const ref = React.createRef();
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [beers, setBeers] = useState([]);
  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState([]);

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

  const handleOpen = id => {
    setIsClicked(isClicked.push(beers.filter(item => item.id === id)));
    setOpen(true);
    console.log(isClicked[0]);
  };

  const handleClose = () => {
    setOpen(false);
    setIsClicked([]);
  };

  return (
    <div className='beer-container'>
      {beers.map(beer => (
        <>
          <BeerCard key={beer.name} handleOpen={handleOpen} beer={beer} />
          <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            open={open}
            onClose={handleClose}
          >
            <DialogContent>
              <BeerCardExpanded
                id={`${beer.id}-${beer.name}`}
                className={classes.paper}
                style={modalStyle}
                beer={beer}
                ref={ref}
              />
            </DialogContent>
          </Modal>
        </>
      ))}
    </div>
  );
};
