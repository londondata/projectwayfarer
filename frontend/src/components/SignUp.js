import React, { Component } from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import SignUpForm from './SignUpForm'

class SignUp extends Component {

  render() {
     const isExistUser = (boolean) => {
      if(boolean) {
          return 'Log In'
       }
      else {return 'Sign Up'}
   }
     return(
        <Modal trigger={<Button>{isExistUser(this.props.isExistUser)}</Button>}>
            <Modal.Header>{isExistUser(this.props.isExistUser)}</Modal.Header>
            <Modal.Content>
              <Modal.Description>
                 <SignUpForm isExistUser={this.props.isExistUser} />
              </Modal.Description>
            </Modal.Content>
          </Modal>
       )
    }
}

export default SignUp
