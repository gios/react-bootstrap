import React from 'react' // eslint-disable-line no-unused-vars
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { routeActions } from 'redux-simple-router'

class App extends React.Component {
  render() {
    const { push } = this.props
    return (
      <div>
        <header>
          Links: {' '} <Link to="/">Home</Link>
                 {' '} <Link to="/counter">Loader</Link>
        </header>
        <div>
          <button onClick={() => push('/foo')}>Go to /foo</button>
        </div>
        <div style={{marginTop: '1.5em'}}>{this.props.children}</div>
      </div>
    )
  }
}

function inject() {
  return {
    push: routeActions.push
  }
}

export default connect(inject)(App)
