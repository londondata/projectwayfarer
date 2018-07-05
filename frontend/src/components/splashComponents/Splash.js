import React, { Component } from 'react';
import TopicList from './TopicList'
import HeroCarousel from './Carousel'
import {Link} from 'react-router-dom';

class Splash extends Component {
    render() {
        return (
            <main>
                <Link to={'/cities'}>
                  <HeroCarousel />
                </Link>
                <hr />
                <TopicList />
            </main>
        )
    }
}

export default Splash
