import React from 'react';
import { Link } from 'react-router-dom';

export class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.displayErrors = false;
    this.displaySignupConfirmation = false;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderSignupConfirmation = this.renderSignupConfirmation.bind(this);
    this.handleSubmitWithDefaultUsername = this.handleSubmitWithDefaultUsername.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // Set the username to first part of email if there is no username
    if (this.state.username.replace(/ /g, '') === '') {
      this.setState({
        username: this.state.email.split('@')[0]
      }, this.handleSubmitWithDefaultUsername)
    } else {
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
    }
  }

  handleSubmitWithDefaultUsername() {
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
    this.displayErrors = true;
    this.displaySignupConfirmation = true;
  }

  renderSignupConfirmation() {
    if (this.displaySignupConfirmation && this.props.formType === 'signup' && this.props.signupConfirmation) {
      return (
        <ul>
          <li key="signUpConfirmation" className="session__msg--confirmation">
            {this.props.signupConfirmation}
          </li>
        </ul>
      )
    } else {
      return null
    }
  }

  renderErrors() {
    if (this.displayErrors) {
      return (
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className="session__msg--error">
              {error}
            </li>
          ))}
        </ul>
      )
    } else {
      return null
    };
  }

  renderUsernameInput() {
    if (this.props.formType === 'signup') {
      return (
        <label className="session__input-container">
          Username
          <br />
          <input type="text"
            value={this.state.username}
            onChange={this.update('username')}
            className="session__textbox"
          />
        </label>
      )
    }

    return null
  }

  render() {
    return (
      <div className="session__form-container">
        <div className="session__form-box">
          <form onSubmit={this.handleSubmit}>
            Welcome to OSUSCN!

            <br />

            Please {this.props.formType} to continue

            {this.renderErrors()}
            {this.renderSignupConfirmation()}

            <br/>
            <br/>


            <label className="session__input-container">
              Email
                <br />
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="session__textbox"
              />
            </label>


            <div>
              <br />
              {this.renderUsernameInput()}
              <br />

              <label className="session__input-container">
                Password
                  <br />
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="session__textbox"
                />
              </label>

              <br/>

              <Link
                to="/forgot-password"
                className="session__link">
                forgot password?
              </Link>
              <br/>
              <br/>

              <div className="session__btn--submit" onClick={this.handleSubmit}>
                <input type="submit" value={this.props.formType} />
              </div>

              <br />
            </div>
          </form>

          <div className="session__or-container">
            <hr className="session__or-hr--left" />
            OR
            <hr className="session__or-hr--right" />
          </div>
          {/* ^^^ source: https://stackoverflow.com/a/2812819/7974948 */}
          <br />

          <div>
            {this.props.navLink}
          </div>
        </div>
      </div>
    );
  }
}