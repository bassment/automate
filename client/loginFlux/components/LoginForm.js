import styles from './LoginFormStyling';

import React from 'react';
import { Link } from 'react-router';
import { TextField, RaisedButton } from 'material-ui';

import Context from './../Context';
import UserActions from '../actions/UserActions';

export default class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
    isProcessing: false,
    errorMessage: null
  }

  onFormSubmit(e) {
    e.preventDefault();

    var self = this;

    var redirectTo = this.props.redirectTo || '/';

    self.setState({isProcessing: true});

    UserActions.login({
      username: this.state.username,
      password: this.state.password
    }, function (err, result) {
      self.setState({isProcessing: false});

      if (err) {
        self.setState({errorMessage: err.message});
      } else {
        self.props.history.pushState(null, redirectTo);
      }
    });
  }

  onUsernameChanged(e) {
    this.setState({username: e.target.value});
  }

  onPasswordChanged(e) {
    this.setState({password: e.target.value});
  }

  render() {
    return (
      <div className='login'>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <TextField
            hintText="Email Field"
            hintStyle={{color: 'orange'}}
            floatingLabelText="Email"
            onChange={this.onUsernameChanged.bind(this)} />
          <br />
          <TextField
            hintText="Password Field"
            hintStyle={{color: 'orange'}}
            floatingLabelText="Password"
            type="password"
            onChange={this.onPasswordChanged.bind(this)} />
          <br />
          { this.state.errorMessage === null ?
            null : <p className="text-danger">{this.state.errorMessage}</p>
          }
          <div style={styles.buttons} className='buttons'>
            <RaisedButton type="submit" label="Login" secondary={true} disabled={this.state.isProcessing} />
            <br />
            <Link style={{color: '#E64A19'}} to="/forgot">Forgot Password</Link>
          </div>
        </form>
      </div>
    );
  }
}
