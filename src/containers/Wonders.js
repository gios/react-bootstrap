import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { loadWonders } from '../actions/wondersAction'

// Components
import WondersTable from '../components/WondersTable'

class Wonders extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(loadWonders())
  }

  render() {
    const { wondersState } = this.props

    if (wondersState.error) {
      return <div>{wondersState.error}</div>
    } else if (wondersState.loading) {
      return <div>Loading!</div>
    } else {
      return (
        <div className='col-sm-8 col-sm-offset-2'>
          <WondersTable wonders={wondersState.wonders} />
        </div>
      )
    }
  }
}

function inject(state) {
  return {
    wondersState: state.reducers.wonders
  }
}

export default connect(inject)(Wonders)
