import { combineReducers } from 'redux'
import Immutable from 'immutable'
import { INCREASE, DECREASE } from '../constants/mainConstants'

const numberState = Immutable.Map({ amount: 1 })

function number(state = numberState.toObject(), action) {
  switch (action.type) {
    case INCREASE:
      return numberState.set('amount', state.amount + action.amount).toObject()
      break;
    case DECREASE:
      return numberState.set('amount', state.amount - action.amount).toObject()
      break;
    default:
      return state;
  }
}

const counter = combineReducers({
  number
})

export default counter
