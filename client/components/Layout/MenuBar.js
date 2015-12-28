import { Styles } from 'material-ui';
import myTheme from './myTheme';
import styles from './MenuBarCSS.js';

import React from 'react';
import Radium from 'radium';

import { Paper, EnhancedButton, Tabs, Tab } from 'material-ui';

const ThemeManager = Styles.ThemeManager;

const MenuBar = React.createClass({
  propTypes: {
    history: React.PropTypes.object
  },

  childContextTypes: {
    muiTheme: React.PropTypes.object
  },

  getInitialState() {
    return {
      tabIndex: this.getSelectedIndex()
    };
  },

  getChildContext() {
    return {
      muiTheme: ThemeManager.getMuiTheme(myTheme)
    };
  },

  // Render Method Functions

  handleTabChange(value, e, tab) {
    this.props.history.pushState(null, tab.props.route);
    this.setState({tabIndex: this.getSelectedIndex()});
  },

  getSelectedIndex() {
    if (this.props.history.isActive('/')) {
      return '1';
    } else if (this.props.history.isActive('tests')) {
      return '2';
    }

    return '0';
  },

  goHome() {
    this.props.history.pushState(this.route);
    this.setState({tabIndex: this.getSelectedIndex()});
  },

  render() {
    return (
      <div>
        <Paper style={styles.paper} zDepth={2} rounded={false}>
          <EnhancedButton
            style={styles.button}
            value="1"
            route="/"
            onClick={this.goHome}
            centerRipple>
              <img style={styles.logoImage} src="images/cookie.png" />
              <span style={styles.logoText}>Automate!</span>
          </EnhancedButton>
          <div style={styles.tabsRight}>
            <Tabs style={styles.tabs} value={this.state.tabIndex} onChange={this.handleTabChange}>
              <Tab style={styles.tab} value="1" label="Home" route="/" />
              <Tab style={styles.tab} value="2" label="Tests" route="/tests" />
            </Tabs>
          </div>
        </Paper>
      </div>
    );
  }
});

/*eslint-disable */
module.exports = Radium(MenuBar);
