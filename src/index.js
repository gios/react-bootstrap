// React, Redux
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// Parse
import Parse from 'parse'

// Routing
import { Router, Route,IndexRoute } from 'react-router'
import { createHistory } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'

// Containers
import Counter from './containers/Counter'
import Login from './containers/Login'
import Register from './containers/Register'

// Store
import configureStore from './store/configureStore'

// Styles (SCSS)
import './index.scss'

// Sync Store and Router
const store = configureStore()
const history = createHistory()

syncReduxAndRouter(history, store)
Parse.initialize("yz8nPl7Cl8dnj3i37cikXUeUsskTZ0CSn7qLfK8m", "vhffz5AWTLSSmOfTXpfqKpoHzTZkeYoLwHwDHNsT")

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={Counter}></Route>
      <Route path="login" component={Login}/>
      <Route path="register" component={Register}/>
    </Router>
  </Provider>,
  document.getElementById('convey')
);
