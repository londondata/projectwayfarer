import React, { Component } from 'react'
import { Button, Header, Modal, Icon } from 'semantic-ui-react'
import PostForm from './PostForm'

class PostButton extends Component {

  render() {

     return(
        <Modal trigger={<Icon name='plus circle' className='button-color' size='huge' />}>
          <Modal.Header>Select a Photo</Modal.Header>
          <Modal.Content>
            <Modal.Description>
              <PostForm />
            </Modal.Description>
          </Modal.Content>
        </Modal>
       )
    }
}

export default PostButton
