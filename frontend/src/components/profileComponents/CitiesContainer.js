import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment } from 'semantic-ui-react'
import CitiesList from './CitiesList'

class CitiesContainer extends Component {
    render() {

        return (
           <main>
              <Grid stackable columns={2}>
                 <Grid.Column width={7}>
                   <CitiesList />
                 </Grid.Column>
                 <Grid.Column width={9}>
                    <Segment>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                       tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       </p>
                    </Segment>
                 </Grid.Column>
              </Grid>
           </main>
        )
    }
}

export default CitiesContainer
