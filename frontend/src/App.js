import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Main from './components/Main'
import CitiesContainer from './components/CitiesContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
           <Route path="/" component={ Main } />
           <Route path="/cities" component={ CitiesContainer } />
        </Switch>
      </div>
    );
  }
}

export default App;
