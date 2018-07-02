import { combineReducers } from 'redux'
import cities from './cityReducer'
import posts from './postReducer'

// Combine all our reducers together
const rootReducer = combineReducers({
  cities,
  posts
})

export default rootReducer
