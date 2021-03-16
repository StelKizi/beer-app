import React, { useState, createRef } from 'react';
import { BeerCardExpanded } from './BeerCardExpanded';
import { BeerCard } from './BeerCard';
import Modal from '@material-ui/core/Modal';
import { DialogContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/Favorites.css';
import '../styles/Home.css';

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
    width: 700,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export const Favorites = ({
  currentPage,
  handlePageChange,
  handleSetFavorite,
  handleRemoveFavorite,
  favoriteBeers,
  isFavorite,
}) => {
  const ref = createRef();
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState({});

  const handleOpen = id => {
    setIsClicked(favoriteBeers.find(beer => beer.id === id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsClicked({});
  };

  return (
    <>
      {favoriteBeers.length !== 0 ? (
        <div className='beer-container'>
          {favoriteBeers.map(beer => (
            <BeerCard
              key={beer.name}
              beer={beer}
              id={beer.id}
              handleOpen={handleOpen}
              handleSetFavorite={handleSetFavorite}
              handleRemoveFavorite={handleRemoveFavorite}
              isFavorite={isFavorite(beer, favoriteBeers)}
            />
          ))}

          <Modal
            aria-labelledby='transition-modal-title'
            aria-describedby='transition-modal-description'
            open={open}
            onClose={handleClose}
          >
            {isClicked && (
              <DialogContent style={modalStyle} className={classes.paper}>
                <BeerCardExpanded
                  id={`${isClicked.id}-${isClicked.name}`}
                  beer={isClicked}
                  handleSetFavorite={handleSetFavorite}
                  handleRemoveFavorite={handleRemoveFavorite}
                  ref={ref}
                  isFavorite={isFavorite(isClicked, favoriteBeers)}
                />
              </DialogContent>
            )}
          </Modal>
        </div>
      ) : (
        <div className='currently-empty'>
          <h1>No beers are currently selected.</h1>
        </div>
      )}
    </>
  );
};
