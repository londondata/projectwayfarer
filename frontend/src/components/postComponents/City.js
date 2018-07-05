import React, { Component } from 'react';
import { FILTER_POSTS } from '../../actions/cityActions'
import index from '../../reducers/index'
import { createStore } from 'redux'
const store = createStore(index)

class City extends Component {

   constructor() {
      super();
      this.onChange = this.onChange.bind(this);
   }
   onChange(event) {
      this.setState({
         city: event.target.value
      })
   }

    render() {
        const clickHandler = (event) => {
            event.preventDefault();
            store.dispatch({
                type: 'FILTER_POSTS_CITY',
                city: this.props.city,
            })
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
