
import React, { Component } from 'react';
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import User2 from '../../images/user2.jpg'

class Post extends Component {
    render() {
        return (
            <div className='post-box flex-column'>
               <Comment.Group minimal>
                  <Comment>
                     <Comment.Avatar as='a' src={User2} />

                        <Comment.Content>
                        <span className='post-title'>{this.props.post.title}</span>
                        <Comment.Metadata>
                        <Comment.Author as='a'>{this.props.post.author}</Comment.Author>
                        <span>Today at 5:42PM</span>
                        </Comment.Metadata>
                        <Comment.Text>{this.props.post.body}</Comment.Text>
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
