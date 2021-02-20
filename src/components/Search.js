import React from 'react';
import '../styles/Search.css';

export const Search = ({ handleUpdate, value }) => {
  return (
    <form>
      <input
        onChange={handleUpdate}
        placeholder='Search for a beer...'
        value={value}
      />
      <span className='input-highlight'>{value.replace(/ /g, '\u00a0')}</span>
    </form>
  );
};
