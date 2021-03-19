import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Modal from '@material-ui/core/Modal';
import { DialogContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BeerCardExpanded } from './BeerCardExpanded';

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

export const Search = ({
  beers,
  favoriteBeers,
  isFavorite,
  handleSetFavorite,
  handleRemoveFavorite,
}) => {
  const [isClicked, setIsClicked] = useState({});
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  let options;
  document.location.pathname === '/favorites'
    ? (options = favoriteBeers)
    : (options = beers);

  options = options.map(option => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  const handleOpen = value => {
    if (!value) {
      return;
    }
    setIsClicked(beers.find(x => x.id === value.id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsClicked({});
  };

  return (
    <>
      <Autocomplete
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter)
        )}
        groupBy={option => option.firstLetter}
        getOptionLabel={option => option.name}
        getOptionSelected={(option, value) => option.id === value.id}
        clearOnEscape
        style={{ width: 400, margin: 'auto' }}
        onChange={(e, value) => handleOpen(value)}
        renderInput={params => (
          <TextField {...params} placeholder='Search beers...' />
        )}
      />
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
    </>
  );
};
