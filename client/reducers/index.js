import {combineReducers} from 'redux'

import errorMessage from './error-message'
import subreddits from './subreddits'
import waiting from './waiting'
import apiimages from './apiImages'


export default combineReducers({
  errorMessage,
  subreddits,
  waiting,
  apiimages
})
