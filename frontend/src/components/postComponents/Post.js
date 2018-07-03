import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react'

class Post extends Component {
    render() {
        return (
            <div className='post-box flex-column'>
                <h2>{this.props.post.title}</h2>
                <h4>{this.props.post.author}</h4>
                <p>{this.props.post.body}</p>
            </div>
        )
    }
}

export default Post
