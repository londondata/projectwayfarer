import React, { Component } from 'react';
import Topic from './Topic'

class TopicList extends Component {
    render() {
        return (
            <div>
                <h1>Topics are below:</h1>
                <Topic />
                <Topic />
                <Topic />
            </div>
        )
    }
}

export default TopicList