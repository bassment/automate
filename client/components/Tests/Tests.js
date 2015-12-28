import React from 'react';
import Helmet from 'react-helmet';

import { Paper } from 'material-ui';
import Form from './Form';

const Tests = React.createClass({
  render() {
    return (
      <div>
        <Helmet title="Tests"/>
        <Paper style={{width: '60%', margin: '100px auto', padding: '30px 0'}}>
          <Form/>
        </Paper>
      </div>
    );
  }
});

export default Tests;
