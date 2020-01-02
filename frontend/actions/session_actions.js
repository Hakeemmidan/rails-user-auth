export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const SIGNUP_CURRENT_USER = 'SIGNUP_CURRENT_USER';
export const RECEIVE_FORGOT_PASSWORD = 'RECEIVE_FORGOT_PASSWORD';
import * as APIUtil from '../util/session_api_util';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const signupCurrentUser = (confirmationMsg) => ({
  type: SIGNUP_CURRENT_USER,
  confirmationMsg
})

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveForgotPassword = (confirmationMsg) => ({
  type: RECEIVE_FORGOT_PASSWORD,
  confirmationMsg
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(confirmationMsg => (
    dispatch(signupCurrentUser(confirmationMsg))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(() => (
    dispatch(logoutCurrentUser())
  ))
);

export const forgotPassword = (email) => dispatch => (
  APIUtil.forgotPassword(email).then((confirmationMsg) => (
    dispatch(receiveForgotPassword(confirmationMsg))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);