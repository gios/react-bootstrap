// React, Redux
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Routing
import { Router, Route,IndexRoute } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

// Containers
import Counter from './containers/Counter'

// Store
import configureStore from './store/configureStore'

// Styles (SCSS)
import './index.scss'

// Sync Store and Router
const store = configureStore();
const history = createHistory()

syncReduxAndRouter(history, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Counter}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('convey')
);
