import { Styles } from 'material-ui';
import myTheme from './myTheme';

import React from 'react';

const ThemeManager = Styles.ThemeManager;

const App = React.createClass({

  propTypes: {
    children: React.PropTypes.node.isRequired,
    history: React.PropTypes.object,
    location: React.PropTypes.object
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(myTheme)
    };
  },

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});

export default App;
