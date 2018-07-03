import React, { Component } from 'react';
import City from './City'
import { connect } from 'react-redux'

class CitiesList extends Component {
    render() {
<<<<<<< HEAD

=======
        
>>>>>>> e8d41d1cfe7b7dbbaae27a94316bccb19af64de7
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
