import React from 'react';
import helper from '../../helpers/RestHelper';

import { LoginForm } from '../../loginFlux/index';
import FacebookButton from './FacebookButton';

export default class LoginPage extends React.Component {
  responseFacebook(response)  {
    if (response.accessToken) {
      var res = {
        providerData: {
          providerId: 'facebook',
          accessToken: response.accessToken
        }
      }
      helper.postJSON('login', JSON.stringify(res));
    }
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
            autoLoad={true}
            callback={this.responseFacebook.bind(this)} />
      </div>
    );
  }
}
