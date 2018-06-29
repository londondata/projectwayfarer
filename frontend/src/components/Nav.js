import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <nav>
                <h1>
                    <a href="#">Login</a>
                    <a href="#">Sign Up</a>
                </h1>
            </nav>
        )
    }
}

export default Nav