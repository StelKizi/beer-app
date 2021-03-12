import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

export const Search = ({ beers }) => {
  const defaultProps = {
    options: beers,
    getOptionLabel: option => option.name,
  };

  return (
    <Autocomplete
      {...defaultProps}
      id='clear-on-escape'
      clearOnEscape
      style={{ width: 400, margin: 'auto' }}
      renderInput={params => (
        <TextField {...params} placeholder='Search for beer...' />
      )}
    />
  );
};
