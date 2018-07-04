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
        body: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
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
         axios.get('https://tmst-project-wayfarer.herokuapp.com/api/posts')
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
          axios.get('https://tmst-project-wayfarer.herokuapp.com/api/posts')
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
