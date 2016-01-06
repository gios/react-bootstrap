import { combineReducers } from 'redux'
import { INCREASE, DECREASE } from '../constants/mainConstants'

const initialState = {
  amount: 1
};

function number(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return { amount: state.amount + action.amount }
      break;
    case DECREASE:
      return { amount: state.amount - action.amount }
      break;
    default:
      return state;
  }
}

const counter = combineReducers({
  number
})

export default counter
