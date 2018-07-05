import React, { Component } from 'react';
import Post from './Post'
import { connect } from 'react-redux'
import PostModel from '../../models/Post'
import PostButton from './PostButton'
import {Link} from 'react-router-dom';

class PostContainer extends Component {

   createPost(post) {
       let newPost = {
          // API data
           name: post
       }
       PostModel.create(newPost).then((res) => {
           let posts = this.state.posts
           let newPosts = posts.push(res.data)
           this.setState({newPosts})
       })
   }

   deletePost(post) {
      PostModel.delete(post).then((res) => {
         let posts = this.state.posts.filter(function(post) {
            return post._id !== res.data._id
         });
         this.setState({posts})
      })
   }

   updatePost(postBody) {
      let postId = this.state.editingPostId
      function isUpdatedPost(post) {
         return post._id === postId;
      }
      PostModel.update(postId, postBody).then((res) => {
         let posts = this.state.posts
         // name is from API
         posts.find(isUpdatedPost).name = postBody
         this.setState({
            posts: posts,
            editingPostId: null,
            editing: false
         })
      })
   }

   editPost(post){
      this.setState ({
         editingPostId: post._id,
         editing: true
      })
   }

    render() {
        let posts = this.props.posts.map((post) => {
            return <Post post={post} />
        });
        return (
            <div>
                <h2 className="post-header">Posts</h2>
                <PostButton />
                <Link to={'/user'}>
                  {posts}
                </Link>
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
