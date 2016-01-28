import styles from './LoginPageStyling';
import Radium from 'radium';

import React, { PropTypes } from 'react';
import UserActions from '../../loginFlux/actions/UserActions';
import helper from '../../helpers/JsRestHelper';

import { LoginForm, Authenticated, NotAuthenticated, UserComponent } from '../../loginFlux/index';
import FacebookButton from './FacebookButton';
import GoogleButton from './GoogleButton';

class LoginPage extends UserComponent {
  state = {
    errorMessage: null,
    isProcessing: false
  }

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  }

  responseFacebook(response)  {
    const res = {
      providerData: {
        providerId: 'facebook',
        accessToken: response.accessToken
      }
    }

    var self = this;

    var redirectTo = this.props.redirectTo || '/';

    self.setState({isProcessing: true});

    UserActions.login(res, function (err, result) {
      self.setState({isProcessing: false});

      if (err) {
        self.setState({errorMessage: err.message});
      } else {
        self.props.history.pushState(null, redirectTo);
      }
    });
  }

  responseGoogle(response)  {
    const res = {
      providerData: {
        providerId: 'google',
        accessToken: response.access_token
      }
    };

    var self = this;

    var redirectTo = this.props.redirectTo || '/profile';

    self.setState({isProcessing: true});

    UserActions.login(res, function (err, result) {
      self.setState({isProcessing: false});

      if (err) {
        self.setState({errorMessage: err.message});
      } else {
        self.props.history.pushState(null, redirectTo);
      }
    });
  }

  render() {
    return (
      <div>
        <div style={styles.verticalCenter}>
          <NotAuthenticated>
            <div>
              <LoginForm redirectTo="/profile" history={this.props.history} location={this.props.location} />
              <br />
              <div className="social-buttons" style={styles.socialButtons}>
                <FacebookButton
                  appId="1657718361176429"
                  autoLoad={false}
                  callback={this.responseFacebook.bind(this)} />
                <GoogleButton
                  clientID="47081224876-evbt3tj0vvi1b05a7hnp4fn3dr7inohh.apps.googleusercontent.com"
                  scopes="email"
                  loginHandler={this.responseGoogle.bind(this)} />
            </div>
          </div>
          </NotAuthenticated>
          <Authenticated>
            <div>
              You are already logged in as {this.state.user ? this.state.user.givenName : ''}!
            </div>
          </Authenticated>
        </div>
      </div>
    );
  }
}

/*eslint-disable */
module.exports = Radium(LoginPage);
