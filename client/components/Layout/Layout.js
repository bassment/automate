import React from 'react';

import { AppCanvas, AppBar } from 'material-ui';
import MenuBar from './MenuBar';
import LeftBar from './LeftBar';

const Layout = React.createClass({
  propTypes: {
    children: React.PropTypes.node.isRequired,
    history: React.PropTypes.object,
    location: React.PropTypes.object
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
     <AppCanvas>
       <AppBar
         onLeftIconButtonTouchTap={this.onLeftIconButtonTouchTap}
         title={title}
         zDepth={0}/>
     </AppCanvas>);
  },

  render() {
    return (
      <div>
        <div>
          {this.state.renderTabs ? <MenuBar history={this.props.history} location={this.props.location}/> : this.getAppBar()}
          <LeftBar ref="leftNav" history={this.props.history} location={this.props.location}/>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export default Layout;
