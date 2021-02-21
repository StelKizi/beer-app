import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Topbar } from './components/Topbar';
/* import { BeerList } from './components/BeerList'; */
import { Home } from './components/Home';
import { Favorites } from './components/Favorites';

function App() {
  return (
    <div>
      <Topbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/favorites' component={Favorites} />
      </Switch>
      {/* <BeerList /> */}
    </div>
  );
}

export default App;
