import React, { Component } from 'react';

class City extends Component {
    render() {
        return (
            <div className='city-box flex-row'>
                <img src={this.props.city.image} />
                <h2>{this.props.city.name}</h2>
            </div>
        )
    }
}

export default City