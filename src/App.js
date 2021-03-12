import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Topbar } from './components/Topbar';
import { Home } from './components/Home';
import { Favorites } from './components/Favorites';
import axios from 'axios';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    const fetchBeerData = async pageNumber => {
      try {
        const { data } = await axios.get(
          `https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=15`
        );
        console.log(data);
        setBeers(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBeerData(currentPage);
  }, [currentPage]);

  const handlePageChange = e => {
    setCurrentPage(e.target.innerText);
    console.log('page nr:', e.target.innerText);
  };

  return (
    <div>
      <Topbar beers={beers} />
      <Switch>
        <Route exact path='/'>
          <Home
            currentPage={currentPage}
            handlePageChange={handlePageChange}
            beers={beers}
          />
        </Route>
        <Route path='/favorites' component={Favorites} />
      </Switch>
    </div>
  );
}

export default App;
