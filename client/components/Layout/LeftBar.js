import {  Styles } from 'material-ui';

import React from 'react';

import { LeftNav, List, ListItem, Divider } from 'material-ui';
import { SelectableContainerEnhance } from 'material-ui/lib/hoc/selectable-enhance';

const SelectableList = SelectableContainerEnhance(List);
const {Spacing, Typography} = Styles;

const AppLeftNav = React.createClass({
  propTypes: {
    history: React.PropTypes.object,
    location: React.PropTypes.object
  },

  contextTypes: {
    muiTheme: React.PropTypes.object,
    router: React.PropTypes.func
  },

  getInitialState() {
    return {
      leftNavOpen: false
    };
  },

  // Render Method Functions

  getStyles() {
    return {
      cursor: 'pointer',
      fontSize: 24,
      color: Typography.textFullWhite,
      lineHeight: Spacing.desktopKeylineIncrement + 'px',
      fontWeight: Typography.fontWeightLight,
      backgroundColor: '#E64A19',
      paddingLeft: Spacing.desktopGutter,
      marginBottom: 8
    };
  },

  toggle() {
    this.setState({leftNavOpen: !this.state.leftNavOpen});
  },

  getSelectedIndex() {
    return this.props.location.pathname;
  },

  handleChangeRequestLeftNav(open) {
    this.setState({
      leftNavOpen: open
    });
  },

  handleRequestChangeList(event, value) {
    this.props.history.push(value);
    this.setState({
      leftNavOpen: false
    });
  },

  handleRequestChangeLink(event, value) {
    window.location = value;
    this.setState({
      leftNavOpen: false
    });
  },

  handleTouchTapHeader() {
    this.props.history.push('/');
    this.setState({
      leftNavOpen: false
    });
  },

  render() {
    return (
      <LeftNav
        docked={false}
        open={this.state.leftNavOpen}
        onRequestChange={this.handleChangeRequestLeftNav}>
        <div
          style={this.getStyles()}
          onTouchTap={this.handleTouchTapHeader}>
          automate !
        </div>
        <SelectableList
          valueLink={{
            value: this.getSelectedIndex(),
            requestChange: this.handleRequestChangeList
          }}>
        <ListItem
          value="/"
          primaryText="Home"/>
        <ListItem
          value="/tests"
          primaryText="Tests"/>
      </SelectableList>
      <Divider/>
      <SelectableList
        subheader="External links"
        valueLink={{
          value: '',
          requestChange: this.handleRequestChangeLink
        }}>
        <ListItem
          value="https://github.com/codterpin"
          primaryText="GitHub"/>
      </SelectableList>
      </LeftNav>
    );
  }
});

export default AppLeftNav;
