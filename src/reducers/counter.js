import Immutable from 'immutable'
import { INCREASE, DECREASE } from '../actions/counterActions'

const numberState = Immutable.Map({ amount: 1 })

export function number(state = numberState.toObject(), action) {
  switch (action.type) {
    case INCREASE:
      return numberState.set('amount', state.amount + action.amount).toObject()
    case DECREASE:
      return numberState.set('amount', state.amount - action.amount).toObject()
    default:
      return state;
  }
}
