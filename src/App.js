import React, { useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Favorites } from './components/Favorites';
import Login from './components/Login';
import axios from 'axios';
import LoadingIcon from './components/LoadingIcon';

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [beers, setBeers] = useState([]);
  const [favoriteBeers, setFavoriteBeers] = useState([]);
  const [beersPerPage] = useState(9);
  const { isLoading, isAuthenticated } = useAuth0();

  useEffect(() => {
    const fetchBeerData = async () => {
      try {
        const { data } = await axios.get(
          `https://api.punkapi.com/v2/beers/?per_page=80`
        );
        console.log(data);
        setBeers(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchBeerData();
  }, []);

  const handlePageChange = e => {
    setCurrentPage(e.target.innerText);
    console.log('page nr:', e.target.innerText);
  };

  const handleSetFavorite = id => {
    setFavoriteBeers(prevState => [
      ...prevState,
      beers.find(beer => beer.id === id),
    ]);
    console.log(favoriteBeers);
  };

  const handleRemoveFavorite = id => {
    setFavoriteBeers(prevState => prevState.filter(beer => beer.id !== id));
    console.log(favoriteBeers);
  };

  const isFavorite = (beer, favoriteBeers) => {
    return favoriteBeers.includes(beer);
  };

  // Get current beers
  const indexOfLastBeer = currentPage * beersPerPage;
  const indexOfFirstBeer = indexOfLastBeer - beersPerPage;
  const currentBeers = beers.slice(indexOfFirstBeer, indexOfLastBeer);

  if (isLoading) return <LoadingIcon />;
  return (
    <div>
      <Login />
      {isAuthenticated && (
        <>
          <Switch>
            <Route exact path='/'>
              <Home
                currentPage={currentPage}
                handlePageChange={handlePageChange}
                beers={currentBeers}
                handleSetFavorite={handleSetFavorite}
                handleRemoveFavorite={handleRemoveFavorite}
                favoriteBeers={favoriteBeers}
                isFavorite={isFavorite}
              />
            </Route>
            <Route path='/favorites'>
              <Favorites
                handleSetFavorite={handleSetFavorite}
                handleRemoveFavorite={handleRemoveFavorite}
                favoriteBeers={favoriteBeers}
                isFavorite={isFavorite}
              />
            </Route>
          </Switch>
        </>
      )}
    </div>
  );
}

export default App;
