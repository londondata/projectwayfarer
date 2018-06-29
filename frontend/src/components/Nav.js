import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login'

class Nav extends Component {
    render() {
        return (
            <nav>
                <Login />
                <h1><a href="#">Sign Up</a></h1>
            </nav>
        )
    }
}

export default Nav