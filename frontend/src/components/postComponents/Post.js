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

<<<<<<< HEAD
export default Post
=======
export default Post
>>>>>>> e8d41d1cfe7b7dbbaae27a94316bccb19af64de7
