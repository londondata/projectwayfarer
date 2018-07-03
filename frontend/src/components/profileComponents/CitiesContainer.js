import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react'
import CitiesList from './CitiesList'
import PostContainer from './PostContainer'

class CitiesContainer extends Component {
<<<<<<< HEAD:frontend/src/components/profileComponents/CitiesContainer.js

=======
    
>>>>>>> e8d41d1cfe7b7dbbaae27a94316bccb19af64de7:frontend/src/components/profileComponents/CitiesContainer.js
    render() {

        return (
           <main>
              <Grid stackable columns={2}>
                 <Grid.Column width={7}>
                   <CitiesList />
                 </Grid.Column>
                 <Grid.Column width={9}>
                    <PostContainer />
                 </Grid.Column>
              </Grid>
           </main>
        )
    }
}

export default CitiesContainer
