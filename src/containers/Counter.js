import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increase, decrease } from '../actions/mainActions'
import { pushPath } from 'redux-simple-router'
import Parse from 'parse'

export default class Counter extends Component {
  render() {
    const { dispatch, amount } = this.props
    return (
      <div className="row">
        <div className="col-sm-4 col-sm-offset-4">
          Value: {amount}<br />
          <button onClick={() => dispatch(increase(1))}>Increase</button>
          <button onClick={() => dispatch(decrease(1))}>Decrease</button><br/>
          <button onClick={() => dispatch(pushPath('/register'))}>Registration</button>
          <button onClick={() => dispatch(pushPath('/login'))}>Login</button>
          <button onClick={() => Parse.User.logOut() }>Logout</button>
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
