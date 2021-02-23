import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Topbar } from './components/Topbar';
import { Home } from './components/Home';
import { Favorites } from './components/Favorites';

function App() {
  return (
    <div>
      <Topbar />
      <Switch>
        <Route exact path='/' component={Home} className='link' />
        <Route path='/favorites' component={Favorites} />
      </Switch>
    </div>
  );
}

export default App;
