import { combineReducers } from 'redux'
import { INCREASE, DECREASE } from '../constants/mainConstants'

const initialState = {
  number: 1
};

function updateNumber(state = initialState, action) {
  console.log(state, action);
  switch (action.type) {
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

const counter = combineReducers({
  updateNumber
})

export default counter
