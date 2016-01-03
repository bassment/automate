import React from 'react';

import { ResetPasswordForm } from '../../loginFlux/index';

export default class ResetPasswordPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3>Forgot Password</h3>
            <hr />
          </div>
        </div>
        <ResetPasswordForm />
      </div>
    );
  }
}
