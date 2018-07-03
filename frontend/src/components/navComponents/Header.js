import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import logo from '../silhouette.jpg'

class Header extends Component {
    render() {
        return (
            <header>
                <img id="logo" src={logo} />
                <h1>Best Wayfarer</h1>
                <Nav />
            </header>
        )
    }
}

export default Header