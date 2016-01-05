import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './containers/App'
import todoApp from './reducers/todoReducer'

let store = createStore(todoApp);

let rootElement = document.getElementById('uptour');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
