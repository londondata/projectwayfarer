import React, { Component } from 'react';
import Topic from './Topic'
import { Grid } from 'semantic-ui-react'

class TopicList extends Component {
    render() {
        return (
            <div>
                <h1>Topics are below:</h1>
                <Grid columns={3} divided>
                   <Grid.Row>
                     <Grid.Column>
                       <Topic />
                     </Grid.Column>
                     <Grid.Column>
                       <Topic />
                     </Grid.Column>
                     <Grid.Column>
                       <Topic />
                     </Grid.Column>
                   </Grid.Row>
               </Grid>
            </div>
        )
    }
}

export default TopicList
