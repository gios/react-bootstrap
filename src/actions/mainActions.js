import { INCREASE, DECREASE } from '../constants/mainConstants'

export function increase(number) {
  return { type: INCREASE, number };
}

export function decrease(number) {
  return { type: DECREASE, number };
}
