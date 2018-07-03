import React, { Component } from 'react';
import Post from './Post'
import { connect } from 'react-redux'

class PostContainer extends Component {
    render() {
        let posts = this.props.posts.map((post) => {
            return <Post post={post} />
        });
        return (
            <div>
                <h2>Posts by city</h2>
                {posts}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps)(PostContainer)
