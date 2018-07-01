import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Nav from './components/Nav'
import SignUpForm from './components/SignUpForm'
import Main from './components/Main'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
