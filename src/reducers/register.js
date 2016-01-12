import { combineReducers } from 'redux'
import Immutable from 'immutable'
import { REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from '../constants/registerConstants'

function registerStatus(state = { error: null }, action) {
  switch (action.type) {
    case REGISTER_USER_SUCCESS:
      return { error: action.error }
      console.log(action);
      break;
    case REGISTER_USER_ERROR:
      return { error: action.error }
      break;
    default:
      return state;
  }
}

export default registerStatus
