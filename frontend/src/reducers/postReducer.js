import axios from 'axios'
import PostModel from '../models/Post'

const defaultState = [
    {
        id: 0,
        city: 'Cleveland',
        title: 'Climbing Coit',
        author: 'teripanda',
        body: 'Id aliquet lectus proin nibh. Aliquam sem et tortor consequat id porta nibh venenatis.',
        image:'https://image.ibb.co/cLwJrd/romy.jpg'
    },
    {
        id: 1,
        city: 'Eugene',
        title: 'Revenge of the Parrots',
        author: 'maxgonerogue',
        body: 'Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        image:'https://pbs.twimg.com/profile_images/588820366841159682/7Goc4cho_400x400.jpg'
    },
    {
        id: 2,
        city: 'Oakland',
        title: 'Movies at the Grand Lake',
        author: 'oxleberry',
        body: 'In ornare quam viverra orci sagittis. Enim neque volutpat ac tincidunt vitae sempervenenatis.',
        image: 'https://i.etsystatic.com/7459726/r/il/5c101a/1292608969/il_340x270.1292608969_ldkt.jpg'
    },
    {
        id: 3,
        city: 'Seattle',
        title: 'Vieux Carre',
        author: 'troiboi',
        body: 'In ornare quam viverra orci sagittis. Enim neque volutpat ac tincidunt vitae sempervenenatis.',
        image:'https://i.redd.it/pfjc57ad4bb01.jpg'
    },
]

function posts(state = defaultState, action) {
    switch (action.type) {
      case 'FILTER_POSTS_CITY':
         // console.log("filtering post by city")
         // console.log(action.city.name)
         // console.log(state)
         let filtered = defaultState.filter( city => {
            return city.city === action.city.name
         }
      )
      console.log(filtered)
      return Object.assign({}, state, {posts:filtered})

         axios.get('https://tmst-project-wayfarer.herokuapp.com/api/posts')
         .then(res => {
             console.log(res.name)
             return res.filter(res.name === action.city)
         })
         // .then(res => {
         //    console.log("updating clickedCity")
         //    console.log(res.city)
         //    return res.city
         // })
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
