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

export const Search = ({ beers }) => {
  const [isClicked, setIsClicked] = useState({});
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);

  const defaultProps = {
    options: beers,
    getOptionLabel: option => option.name,
  };

  /* const handleSubmit = e => {
    return e.target;
  }; */

  const handleOpen = id => {
    setIsClicked(beers.find(x => x.id === id));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsClicked({});
  };

  return (
    <>
      <Autocomplete
        {...defaultProps}
        id='clear-on-escape'
        clearOnEscape
        style={{ width: 400, margin: 'auto' }}
        onChange={(e, value) => handleOpen(value.id)}
        renderInput={params => (
          <TextField {...params} placeholder='Search for beer...' />
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
              id={`${isClicked.id}-${isClicked.name}`}
              beer={isClicked}
            />
          </DialogContent>
        )}
      </Modal>
    </>
  );
};
