import Immutable from 'immutable'
import { INCREASE, DECREASE } from '../actions/mainActions'

const numberState = Immutable.Map({ amount: 1 })

export function number(state = numberState.toObject(), action) {
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
