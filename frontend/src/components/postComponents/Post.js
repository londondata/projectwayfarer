import React, { Component } from 'react';
import { Item, Comment, Rating } from 'semantic-ui-react'
import userlogo from '../../images/user2.jpg'

const RatingExampleStar = () => <Rating icon='star' defaultRating={3} maxRating={4} />

class Post extends Component {
    render() {
        return (

         <div className='post-box'>
            <h2>{this.props.post.title}</h2>
            <h4>{this.props.post.author}</h4>
            <p>{this.props.post.body}</p>
            <Rating icon='star' defaultRating={3} maxRating={5} />
            <hr />
            <Comment.Group minimal size='large'>
               <Comment>
                  <Comment.Avatar as='a' src={userlogo} />
                  <Comment.Content>
                  <Comment.Author as='a'>Matt</Comment.Author>
                  <Comment.Metadata>
                     <span>Today at 5:42PM</span>
                  </Comment.Metadata>
                  <Comment.Text>How artistic!</Comment.Text>
                  <Comment.Actions>
                     <a>Reply</a>
                  </Comment.Actions>
                  </Comment.Content>
               </Comment>
            </Comment.Group>
         </div>
        )
    }
}

export default Post
