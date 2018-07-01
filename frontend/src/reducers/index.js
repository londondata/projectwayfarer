import { combineReducers } from 'redux'
import cities from './cityReducer'

// Combine all our reducers together
const rootReducer = combineReducers({
  cities
})

export default rootReducer
