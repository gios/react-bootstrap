import { INCREASE, DECREASE } from '../constants/mainConstants'

export function increase(amount) {
  return { type: INCREASE, amount };
}

export function decrease(amount) {
  return { type: DECREASE, amount };
}
