
import React, { Component } from 'react'
import { Form, Grid, TextArea } from 'semantic-ui-react'
import {Link} from 'react-router-dom';

class PostForm extends Component {

  render() {

        return (
          <Form>
            <Grid.Column width={7}>
                  <Form.Field>
                    <label>Title</label>
                    <input placeholder='Put your post title here...' />
                  </Form.Field>
                  <Form.Field control={TextArea} label='Body' placeholder='Begin writing your post here...' />
                  <Link to={'/cities'}>
                     <Form.Button>Submit</Form.Button>
                  </ Link>

            </Grid.Column>
          </Form>
        )
      }
  }


export default PostForm
