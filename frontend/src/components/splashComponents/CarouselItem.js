<<<<<<< HEAD
=======

>>>>>>> e8d41d1cfe7b7dbbaae27a94316bccb19af64de7
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cities extends Component {
  render () {

    return (
      <div key={this.props.city.id}>
        <img src={this.props.city.image} alt={this.props.city.name} />
      </div>
   )
  }
}



export default Cities
