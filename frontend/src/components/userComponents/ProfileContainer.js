
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react'
import Profile from './Profile'
import PostContainer from '../postComponents/PostContainer'

class ProfileContainer extends Component {

    render() {
        return (
           <main>
              <Grid stackable columns={2}>
                 <Grid.Column width={7} centered className="profile-box">
                    <h2>Profile</h2>
                    <Profile centered/>
                 </Grid.Column>
                 <Grid.Column width={9}>
                    <PostContainer />
                 </Grid.Column>
              </Grid>
           </main>
        )
    }
}

export default ProfileContainer
