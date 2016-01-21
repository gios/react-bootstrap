import Immutable from 'immutable'
import { LOAD_WONDERS, LOAD_WONDERS_OK, LOAD_WONDERS_ERROR } from '../actions/wondersAction'
import { UPDATE_LOCATION } from 'redux-simple-router'

const wondersState = Immutable.Map({ loading: false, wonders: null, error: null })

export function wonders(state = wondersState.toObject(), action) {
  switch (action.type) {
    case LOAD_WONDERS:
    case UPDATE_LOCATION:
      return wondersState.set('loading', true).toObject()
    case LOAD_WONDERS_OK:
      return wondersState.merge({
        loading: false,
        wonders: action.wonders,
        error: null
      }).toObject()
    case LOAD_WONDERS_ERROR:
      return wondersState.merge({
        loading: false,
        wonders: null,
        error: action.error
      }).toObject()
    default:
      return state;
  }
}
