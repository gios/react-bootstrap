import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class Login extends Component {

  getLoginData(e) {
    e.preventDefault();
    let username = this.refs.login.value,
        password = this.refs.password.value;
    console.log(username, password);
  }

  render() {
    const { dispatch } = this.props
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <form onSubmit={this.getLoginData.bind(this)}>
            <div className="form-group row">
              <label htmlFor="loginValue" className="col-sm-2 form-control-label">Username</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="loginValue" placeholder="Username" ref="username" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="passwordValue" className="col-sm-2 form-control-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="passwordValue" placeholder="Password" ref="password" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-secondary">Sign in</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

function inject(state) {
  return {}
}

export default connect(inject)(Login)
