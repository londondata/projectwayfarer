import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'

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
    console.log(this.props.isExistUser)
    const isExistUser = (boolean) => {
      if(boolean) {
         return(
            <Form>
              <Form.Group widths='equal'>
                <Form.Input fluid label='Username' placeholder='Username' />
                <Form.Input fluid label='Password' placeholder='Password' type='password'/>
                <Form.Select fluid label='City' options={options} placeholder='City' />
              </Form.Group>

              <Form.Checkbox label='I agree to the Terms and Conditions' />
           <Form.Button>Submit</Form.Button>
            </Form>
         )
      }
      else {return(

               <Form>
                <Form.Group widths='equal'>
                   <Form.Input fluid label='Username' placeholder='Username' />
                   <Form.Input fluid label='Password' placeholder='Password' type='password'/>
                </Form.Group>
                <Form.Button>Submit</Form.Button>
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
