import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './components/Navbar'
import Product from './components/Product'

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Product} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
