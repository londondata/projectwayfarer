import axios from 'axios'

const defaultState = [
    {
        id: 0,
        city: 'San Francisco',
        title: 'Title 1',
        author: 'Frank',
        body: 'Id aliquet lectus proin nibh. Aliquam sem et tortor consequat id porta nibh venenatis.'
    },
    {
        id: 1,
        city: 'San Francisco',
        title: 'Title 2',
        author: 'Karen',
        body: 'Arcu dui vivamus arcu felis bibendum. Volutpat lacus laoreet non curabitur gravida.'
    },
    {
        id: 2,
        city: 'New Orleans',
        title: 'Title 3',
        author: 'Fred',
        body: 'In ornare quam viverra orci sagittis. Enim neque volutpat ac tincidunt vitae sempervenenatis.'
    },

]

function posts(state = defaultState, action) {
    switch (action.type) {
      case 'FILTER_POSTS_CITY':
         console.log("filtering post by city")
         axios.get('/api/posts')
         .then(res => {
             console.log(state)
             return res.filter(res.name === action.city)
         })
         .then(res => {
            console.log("updating clickedCity")
            console.log(res.city)
            return res.city
         })
      case 'FILTER_POSTS_USER':
          console.log("filtering posts by user")
          axios.get('/api/posts')
          .then(res => {
              console.log(state)
              return res.filter(res.user === action.user)
      })
      default:
         console.log(state);
         return state
      }
}

export default posts
