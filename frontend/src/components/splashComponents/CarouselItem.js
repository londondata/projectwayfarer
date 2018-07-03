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
