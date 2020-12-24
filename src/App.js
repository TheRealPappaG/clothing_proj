import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component';

import './App.css';

const HatPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <div className="App">
      {/* <HomePage /> */}
      <Switch>
        <Route exact path= '/' component={HomePage}/>
        <Route path= 'shop/hats' component={HatPage}/>
      </Switch>
    </div>
  );
}

export default App;
