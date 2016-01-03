import styles from './LoginPageStyling';

import React, { PropTypes } from 'react';
import helper from '../../helpers/JsRestHelper';
import Radium from 'radium';

import { LoginForm } from '../../loginFlux/index';
import FacebookButton from './FacebookButton';
import GoogleButton from './GoogleButton';

class LoginPage extends React.Component {
  state = {
    errorMessage: null
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

    const self = this
    helper.makeRequest('post', '/login', res, function (err, result) {
      if (err) {
        self.setState({errorMessage: err.message});
      } else {
        // window.location.reload();
        self.props.history.pushState(null, '/tests');
      }
    })
  }

  responseGoogle(response)  {
    const res = {
      providerData: {
        providerId: 'google',
        accessToken: response.access_token
      }
    };
    const self = this
    helper.makeRequest('post', '/login', res, function (err, result) {
      if (err) {
        self.setState({errorMessage: err.message});
      } else {
        // window.location.reload();
        self.props.history.pushState(null, '/tests');
      }
    })
  }

  render() {
    return (
      <div>
        <div style={styles.fullscreenBg}>
          <video loop autoPlay style={styles.fullscreenBgVideo}>
              <source src="video/RaccoonLow.webm" type="video/webm"/>
          </video>
        </div>
        <div style={styles.verticalCenter}>
          <LoginForm redirectTo="/profile" history={this.props.history} location={this.props.location} />
          <br />
          <div className="social-buttons" style={styles.socialButtons}>
            <FacebookButton
              appId="1657718361176429"
              autoLoad={false}
              callback={this.responseFacebook.bind(this)} />
            <GoogleButton
              clientID="47081224876-evbt3tj0vvi1b05a7hnp4fn3dr7inohh.apps.googleusercontent.com"
              loginHandler={this.responseGoogle.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

/*eslint-disable */
module.exports = Radium(LoginPage);
