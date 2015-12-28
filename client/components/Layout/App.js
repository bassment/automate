import { Styles } from 'material-ui';
import myTheme from './myTheme';

import React from 'react';

import { AppCanvas, AppBar } from 'material-ui';
import MenuBar from './MenuBar.js';
import LeftBar from './LeftBar';

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

  componentWillMount() {
    const setTabsState = function setTabs() {
      this.setState({renderTabs: !(document.body.clientWidth <= 680)});
    }.bind(this);
    setTabsState();
    window.onresize = setTabsState;
  },

  onLeftIconButtonTouchTap() {
    this.refs.leftNav.toggle();
  },

  getAppBar() {
    let title = '';

    if (this.props.history.isActive('/')) {
      title = 'Home';
    }

    if (this.props.history.isActive('/tests')) {
      title = 'Tests';
    }

    return (
     <div>
       <AppBar
         onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
         title={title}
         zDepth={0}/>
     </div>);
  },

  render() {
    return (
      <div>
        <AppCanvas>
          {this.state.renderTabs ? <MenuBar history={this.props.history} location={this.props.location}/> : this.getAppBar()}
          <LeftBar ref="leftNav" history={this.props.history} location={this.props.location}/>
          {this.props.children}
        </AppCanvas>
      </div>
    );
  }
});

export default App;
