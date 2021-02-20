import React, { useState } from 'react';
import { Search } from './Search';
import { Nav } from './Nav';
import '../styles/Topbar.css';

export const Topbar = () => {
  const [input, setInput] = useState('');

  const handleUpdate = e => {
    const { value } = e.target;
    setInput(value);
  };

  return (
    <div className='topbar'>
      <Search handleUpdate={handleUpdate} value={input} />
      <Nav />
    </div>
  );
};
