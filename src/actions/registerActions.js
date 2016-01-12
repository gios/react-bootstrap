import { REGISTER_USER_SUCCESS, REGISTER_USER_ERROR } from '../constants/registerConstants'
import Parse from 'parse'

function registerUserSuccess() {
  return {
    type: REGISTER_USER_SUCCESS
  };
}

function registerUserError(error) {
  return {
    type: REGISTER_USER_ERROR,
    error
  };
}

export function registerLoad(credentials) {
  var user = new Parse.User();
  user.set("username", credentials.username);
  user.set("password", credentials.password);
  user.set("email", credentials.email);
  return dispatch => user.signUp(null, {
    success: function(user) {
      dispatch(registerUserSuccess())
    },
    error: function(user, error) {
      dispatch(registerUserError(error))
    }
  });
}
