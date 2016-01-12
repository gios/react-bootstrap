import React, { Component } from 'react'
import { connect } from 'react-redux'
import { registerLoad } from '../actions/registerActions'

export default class Register extends Component {

  getRegisterData(e) {
    e.preventDefault();
    let username = this.refs.username.value,
        email = this.refs.email.value,
        password = this.refs.password.value,
        rePassword = this.refs.rePassword.value;

    let regCredentials = {
      username,
      email,
      password
    }
    this.props.dispatch(registerLoad(regCredentials))
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <form onSubmit={this.getRegisterData.bind(this)}>
            <div className="form-group row">
              <label htmlFor="username" className="col-sm-2 form-control-label">Username</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" id="username" placeholder="Username" ref="username" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="emailValue" className="col-sm-2 form-control-label">Email</label>
              <div className="col-sm-10">
                <input type="email" className="form-control" id="emailValue" placeholder="Email" ref="email" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="passwordValue" className="col-sm-2 form-control-label">Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="passwordValue" placeholder="Password" ref="password" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="rePasswordValue" className="col-sm-2 form-control-label">Repeat Password</label>
              <div className="col-sm-10">
                <input type="password" className="form-control" id="rePasswordValue" placeholder="Re-Password" ref="rePassword" />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-secondary">Registration</button>
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

export default connect(inject)(Register)
