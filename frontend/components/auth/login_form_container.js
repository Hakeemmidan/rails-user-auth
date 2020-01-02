import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, forgotPassword } from '../../actions/session_actions';
import { SessionForm } from './SessionForm';

const mapStateToProps = ({ errors }) => {
  return {
    errors: errors.session,
    formType: 'login',
    navLink: <Link className="session__btn--nav" to="/signup">Register</Link>,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    forgotPassword: (email) => dispatch(forgotPassword(email))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);