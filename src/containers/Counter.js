import React, { Component } from 'react' // eslint-disable-line no-unused-vars
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/counterActions'

export default class Counter extends Component {
  render() {
    const { dispatch, amount } = this.props
    return (
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4">
          Value: {amount}<br />
          <button onClick={() => dispatch(increase(1))}>Increase</button>
          <button onClick={() => dispatch(decrease(1))}>Decrease</button>
        </div>
      </div>
    )
  }
}

function inject(state) {
  return {
    amount: state.reducers.number.amount
  }
}

export default connect(inject)(Counter)
