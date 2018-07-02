
import React, { Component } from 'react';

class CitiesList extends Component {
    render() {
        return (
            <div>
               <h2>Cities List</h2>
               <div className='city-box flex-row'>
                  <img src='https://www.sydney.com/sites/sydney/files/styles/full_height_image/public/2018-02/syd-1-1_0.jpg' />
                  <h2>Sydney</h2>
               </div>
            </div>
        )
    }
}

export default CitiesList
