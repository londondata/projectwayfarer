const defaultState = [
    {
        id: 0,
        name: 'San Francisco',
        image: 'https://media-cdn.tripadvisor.com/media/photo-s/01/70/71/51/the-painted-ladies-of.jpg'
    },
    {
        id: 1,
        name: 'London',
        image: 'https://www.revistaviajesdigital.com/images/LONDRES.jpg'
    },
    {
        id: 2,
        name: 'Sydney',
        image: 'https://www.sydney.com/sites/sydney/files/styles/full_height_image/public/2018-02/syd-1-1_0.jpg'
    },
    {
        id: 3,
        name: 'New Orleans',
        image: 'https://fthmb.tqn.com/RACn8CwaCqilw1nPIZbdkseVf_k=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/streetcar-in-new-orleans-699112771-5a98de0d1f4e130036d2e855.jpg'
    },
    {
        id: 4,
        name: 'Hong Kong',
        image: 'https://images.placesonline.com/photos/18376_hong_kong_meraviglioso_spettacoli_di_luci.jpg'
    },
    {
        id: 5,
        name: 'Los Angeles',
        image: 'https://utazomajom.hu/wp-content/uploads/2018/05/75434072_m-1024x683.jpg'
    }
]

function cities (state = defaultState, action) {
    switch (action.type) {
    default:
        console.log(state);
        return state
    }
}

export default cities
