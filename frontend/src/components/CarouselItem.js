
import React, { Component } from 'react'
import { connect } from 'react-redux'

class Cities extends Component {
  render () {
     console.log(this.props.cities[0].image)
    return (
      <div>
         {this.props.cities.map(ele => (
            <div key={ele.id}>
               <img src={ele.image} />
            </div>
         ))}
      </div>
   )
  }
}

const mapStateToProps = (state) => {
  return {
    cities: state.cities
  }
}

export default connect(mapStateToProps)(Cities)
