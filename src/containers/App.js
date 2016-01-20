import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { routeActions } from 'redux-simple-router'

class App extends Component {
  render() {
    const { currentRoute } = this.props
    return (
      <div>
        <nav className='navbar navbar-fixed-top navbar-dark bg-inverse'>
          <Link className='navbar-brand' to='/'>Top Request</Link>
          <ul className='nav navbar-nav'>
            <li className='nav-item'>
              <Link className={currentRoute === '/' ? 'nav-link active' : 'nav-link'} to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            <li className='nav-item'>
              <Link className={currentRoute === '/counter' ? 'nav-link active' : 'nav-link'} to='/counter'>
                Counter
              </Link>
            </li>
          </ul>
        </nav>
        <div className='container'>
          <div style={{marginTop: '8em'}}>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

function inject(state) {
  return {
    push: routeActions.push,
    currentRoute: state.routing.location.pathname
  }
}

export default connect(inject)(App)
