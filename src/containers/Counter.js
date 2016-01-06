import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/mainActions'

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

Counter.propTypes = {
  increase: React.PropTypes.func,
  decrease: React.PropTypes.func
}

function inject(state) {
  return {
    amount: state.counter.number.amount
  }
}

export default connect(inject)(Counter)
