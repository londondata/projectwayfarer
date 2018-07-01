import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Carousel } from 'react-responsive-carousel';

class HeroCarousel extends Component {
    render() {
        return (
            <Carousel className="caro-size">
                <div>
                    <img src="https://www.sydney.com/sites/sydney/files/styles/full_height_image/public/2018-02/syd-1-1_0.jpg" />
                </div>
                <div>
                    <img src="https://www.revistaviajesdigital.com/images/LONDRES.jpg" />
                </div>
                <div>
                    <img src="https://images.placesonline.com/photos/18376_hong_kong_meraviglioso_spettacoli_di_luci.jpg" />
                </div>
                <div>
                    <img src="https://fthmb.tqn.com/RACn8CwaCqilw1nPIZbdkseVf_k=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/streetcar-in-new-orleans-699112771-5a98de0d1f4e130036d2e855.jpg" />
                </div>
                <div>
                    <img src="https://utazomajom.hu/wp-content/uploads/2018/05/75434072_m-1024x683.jpg" />
                </div>
                <div>
                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/01/70/71/51/the-painted-ladies-of.jpg" />
                </div>
            </ Carousel>
        )
    }
}

export default HeroCarousel
