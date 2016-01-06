import { combineReducers } from 'redux'
import { INCREASE, DECREASE } from '../actions/mainActions'

const initialState = {
  number: 1
};

function updateNumber(state = initialState, action) {
  switch (action) {
    case INCREASE:
      return { number: state.number + action.number }
      break;
    case DECREASE:
      return { number: state.number - action.number }
      break;
    default:
      return state;
  }
}

const counter = combineReducers(
  updateNumber
)

export default counter
