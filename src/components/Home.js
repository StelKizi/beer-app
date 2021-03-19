import React, { useState } from 'react';
import { Topbar } from './Topbar';
import { BeerCardExpanded } from './BeerCardExpanded';
import { BeerCard } from './BeerCard';
import Modal from '@material-ui/core/Modal';
import { DialogContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { PaginationButtons } from './Pagination';
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

export const Home = ({
  currentPage,
  handlePageChange,
  beers,
  handleSetFavorite,
  handleRemoveFavorite,
  favoriteBeers,
  isFavorite,
}) => {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [isClicked, setIsClicked] = useState({});

  const handleOpen = id => {
    setIsClicked(beers.find(beer => beer.id === id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsClicked({});
  };

  return (
    <>
      <Topbar
        beers={beers}
        favoriteBeers={favoriteBeers}
        isFavorite={isFavorite}
        handleSetFavorite={handleSetFavorite}
        handleRemoveFavorite={handleRemoveFavorite}
      />
      <div className='beer-container'>
        {beers.map(beer => (
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
                beer={isClicked}
                handleSetFavorite={handleSetFavorite}
                handleRemoveFavorite={handleRemoveFavorite}
                isFavorite={isFavorite(isClicked, favoriteBeers)}
              />
            </DialogContent>
          )}
        </Modal>
      </div>
      <PaginationButtons
        handlePageChange={handlePageChange}
        page={currentPage}
      />
    </>
  );
};
