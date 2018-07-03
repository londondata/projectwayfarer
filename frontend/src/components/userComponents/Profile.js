
import React, { Component } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'
import userlogo from '../../images/user1.jpg'

class Profile extends Component {
    render() {
        return (
           <Card>
             <Image src={userlogo} />
             <Card.Content>
               <Card.Header>Makar</Card.Header>
               <Card.Meta>Joined in 2018</Card.Meta>
               <Card.Description>Makar is undoubtedly the most important Korok to the history and fate of the Great Sea</Card.Description>
             </Card.Content>
             <Card.Content extra>
               <a>
                 <Icon name='user' />
                 10 Friends
               </a>
             </Card.Content>
           </Card>
        )
    }
}

export default Profile
