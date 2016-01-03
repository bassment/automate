import React from 'react';

import { RegistrationForm } from '../../loginFlux/index';

export default class RegisterPage extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <h3>Registration</h3>
            <hr />
          </div>
        </div>
        <RegistrationForm />
      </div>
    );
  }
}
