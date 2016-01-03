import React from 'react';

import { VerifyEmailView } from '../../loginFlux/index';

export default class VerifyEmailPage extends React.Component {
  render() {
    var spToken = this.props.location.query.sptoken;

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3>Verify Your Account</h3>
            <hr />
          </div>
        </div>
        <VerifyEmailView spToken={spToken} />
      </div>
    );
  }
}
