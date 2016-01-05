import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import todoApp from '../reducers/todoReducer'

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

export default function configureStore(initialState) {
  return finalCreateStore(todoApp, initialState)
}
