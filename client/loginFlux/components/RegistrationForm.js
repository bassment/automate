import styles from './RegistrationFormStyling';

import React from 'react';
import { Link } from 'react-router';
// import ReactMixin from 'react-mixin';
// import { History } from 'react-router';

import LoginLink from '../components/LoginLink';
import UserActions from '../actions/UserActions';

import { TextField, RaisedButton } from 'material-ui';

export default class RegistrationForm extends React.Component {
  state = {
    fields: {
      givenName: '',
      surname: '',
      email: '',
      password: ''
    },
    isProcessing: false,
    isAccountCreated: false,
    isAccountEnabled: false,
    errorMessage: null
  }

  onFormSubmit(e) {
    e.preventDefault();

    var self = this;

    self.setState({
      isProcessing: true
    });

    UserActions.register(this.state.fields, function (err, result) {
      if (err) {
        self.setState({
          errorMessage: err.message,
          isProcessing: false
        });
      } else {
        if (result.status === 'ENABLED') {
          UserActions.login({
            username: self.state.fields.email || self.state.fields.username,
            password: self.state.fields.password
          }, function (err) {
            if (err) {
              self.setState({
                isProcessing: false,
                isAccountCreated: false,
                errorMessage: err.message
              });
            } else {
              self.setState({
                isProcessing: false,
                isAccountCreated: true,
                isAccountEnabled: true
              });
            }
          });
        } else {
          self.setState({
            isProcessing: false,
            isAccountCreated: true,
            isAccountEnabled: false
          });
        }
      }
    });
  }

  onFirstNameChanged(e) {
    this.state.fields.givenName = e.target.value;
  }

  onLastNameChanged(e) {
    this.state.fields.surname = e.target.value;
  }

  onEmailChanged(e) {
    this.state.fields.email = e.target.value;
  }

  onPasswordChanged(e) {
    this.state.fields.password = e.target.value;
  }

  render() {
    return (
      <div style={styles.verticalCenter} className='sp-login-form'>
        { this.state.isAccountCreated ?
          <div>
            { this.state.isAccountEnabled ?
              <p>Your account has been created. <LoginLink>Login Now</LoginLink>.</p>
            :
              <div>
                <p>Your account has been created. Please check your email for a verification link.</p>
                <p>
                  <LoginLink>Back to Login</LoginLink>
                </p>
              </div>
            }
          </div>
        :
          <form onSubmit={this.onFormSubmit.bind(this)}>
            <h2 style={styles.header}>Sign Up</h2>
            <TextField
              style={styles.field}
              hintText="First Name"
              disabled={this.state.isProcessing}
              onChange={this.onFirstNameChanged.bind(this)} />
            <TextField
              style={styles.field}
              hintText="Last Name"
              disabled={this.state.isProcessing}
              onChange={this.onLastNameChanged.bind(this)} />
            <TextField
              style={styles.field}
              hintText="Email"
              disabled={this.state.isProcessing}
              onChange={this.onEmailChanged.bind(this)} />
            <TextField
              style={styles.field}
              type="password"
              hintText="Password"
              disabled={this.state.isProcessing}
              onChange={this.onPasswordChanged.bind(this)} />
            { this.state.errorMessage === null ?
              null : <p>{this.state.errorMessage}</p>
            }
            <div style={styles.links}>
              <RaisedButton style={styles.signUpLink} type="submit" label="Sign Up" disabled={this.state.isProcessing} secondary={true} />
              <Link to="/login"><RaisedButton label="Back to Sign In" primary={true} /></Link>
            </div>
          </form>
        }
      </div>
    );
  }
}

// ReactMixin.onClass(RegistrationForm, History);
