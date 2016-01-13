// React, Redux
import React from 'react' // eslint-disable-line no-unused-vars
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// Routing
import { Router, Route } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

// Containers
import Counter from './containers/Counter'

// Store
import configureStore from './store/configureStore'

// Styles (SCSS)
import './index.scss'

// Sync Store and Router
const store = configureStore()
const history = createHistory()

syncReduxAndRouter(history, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Counter}></Route>
    </Router>
  </Provider>,
  document.getElementById('convey')
);
