<<<<<<< HEAD

=======
>>>>>>> e8d41d1cfe7b7dbbaae27a94316bccb19af64de7
import React, { Component } from 'react'
import { Form, Grid } from 'semantic-ui-react'

const options = [
  { key: '0', text: 'Sydney', value: 'sydney' },
  { key: '1', text: 'London', value: 'london' },
  { key: '2', text: 'San Francisco', value: 'sanFrancisco' },
  { key: '3', text: 'Hong Kong', value: 'hongKong' },
  { key: '4', text: 'New Orleans', value: 'newOrleans' },
  { key: '5', text: 'Los Angeles', value: 'losAngeles' },
]

class SignUpForm extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    const isExistUser = (boolean) => {
      if(boolean) {
        return (

          <Form>
            <Grid.Column width={7}>
              <Form.Input fluid label='Username' placeholder='Username' />
              <Form.Input fluid label='Password' placeholder='Password' type='password' />
              <Form.Button>Submit</Form.Button>
            </Grid.Column>
          </Form>

        )
      }
      else {
        return (
          <Form>
            <Grid.Column width={7}>
              <Form.Input fluid label='Username' placeholder='Username' />
              <Form.Input fluid label='Password' placeholder='Password' type='password' />
              <Form.Select fluid label='City' options={options} placeholder='City' />
              <Form.Checkbox label='I agree to the Terms and Conditions' />
              <Form.Button>Submit</Form.Button>
            </Grid.Column>
          </Form>
        )
      }
   }
    return (
      isExistUser(this.props.isExistUser)
    )
  }
}

export default SignUpForm
