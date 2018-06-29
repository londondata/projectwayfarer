import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'

class Header extends Component {
    render() {
        return (
            <header>
                <img src="http://static1.squarespace.com/static/5557fa04e4b02e4679126d37/t/5558043ee4b02f3bca029c58/1526414190360/?format=1500w" />
                <h1>Best Wayfarer</h1>
                <Nav />
            </header>
        )
    }
}

export default Header