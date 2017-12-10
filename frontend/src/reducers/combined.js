import { combineReducers } from 'redux'
import categories from './categories'
import posts from './posts'
import post from './posts'

export default combineReducers({
  categories,
  posts,
  post
});