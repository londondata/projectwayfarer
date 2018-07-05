import React, { Component } from 'react';
import City from './City'
import { connect } from 'react-redux'
import PostModel from '../../models/Post'

class CitiesList extends Component {


    render() {

        console.log(this.props.cities[0].image);
        let cities = this.props.cities.map((city) => {
            return <City key={city.id} city={city} />
        });
        return (
            <div>
               <h2>Cities List</h2>
                {cities}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities
    }
}

export default connect(mapStateToProps)(CitiesList)
