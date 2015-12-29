import React from 'react';
import helper from '../../helpers/RestHelper';

import { LoginForm } from '../../loginFlux/index';
import FacebookButton from './FacebookButton';
import GoogleButton from './GoogleButton';

export default class LoginPage extends React.Component {
  responseFacebook(response)  {
    const res = {
      providerData: {
        providerId: 'facebook',
        accessToken: response.accessToken
      }
    };
    helper.postJSON('login', JSON.stringify(res));
  }

  responseGoogle(token)  {
    const res = {
      providerData: {
        providerId: 'google',
        accessToken: token
      }
    };
    helper.postJSON('login', JSON.stringify(res));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3>Login</h3>
            <hr />
          </div>
        </div>
        <LoginForm redirectTo="/profile" />
        <br />
          <FacebookButton
            appId="1657718361176429"
            autoLoad={false}
            callback={this.responseFacebook.bind(this)} />
        <br />
          <GoogleButton
            clientID="47081224876-evbt3tj0vvi1b05a7hnp4fn3dr7inohh.apps.googleusercontent.com"
            loginHandler={this.responseGoogle.bind(this)} />
      </div>
    );
  }
}
