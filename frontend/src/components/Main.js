import React, { Component } from 'react';
import TopicList from './TopicList'
import HeroCarousel from './Carousel'

class Main extends Component {
    render() {
        return (
            <main>
                <HeroCarousel />
                <hr />
                <TopicList />
            </main>
        )
    }
}

export default Main