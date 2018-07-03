import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Nav from './components/navComponents/Nav'
import Splash from './components/splashComponents/Splash'
import CitiesContainer from './components/profileComponents/CitiesContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
           <Route path="/cities" component={ CitiesContainer } />
           <Route path="/" component={ Splash } />
        </Switch>
      </div>
    );
  }
}

export default App;
