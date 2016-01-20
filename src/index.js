// React, Redux
import React from 'react' // eslint-disable-line no-unused-vars
import { render } from 'react-dom'
import { Provider } from 'react-redux'

// Routing
import { Router, Route, browserHistory } from 'react-router'

// Containers
import Counter from './containers/Counter'

// Store
import config from './store/configureStore'

// Styles (SCSS)
import './index.scss'

const store = config.configureStore()
config.reduxRouterMiddleware.listenForReplays(store)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Counter}></Route>
    </Router>
  </Provider>,
  document.getElementById('top-request')
);
