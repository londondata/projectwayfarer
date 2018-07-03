import React, { Component } from 'react';
import { FILTER_POSTS } from '../../actions/cityActions'
import index from '../../reducers/index'
import { createStore } from 'redux'
const store = createStore(index)

class City extends Component {
    render() {
        const clickHandler = (event) => {
            event.preventDefault();
            store.dispatch({
                type: 'FILTER_POSTS',
                city: this.props.city,
            })
            console.log(this.state)
        }
        return (
            <a href="#">
                <div className='city-box flex-row' onClick={clickHandler}>
                    <img src={this.props.city.image} />
                    <h2>{this.props.city.name}</h2>
                </div>
            </a>
        )
    }
}

export default City
