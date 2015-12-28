import React from 'react';
import helper from '../../helpers/RestHelper.js';

import { RadioButton, RadioButtonGroup, RaisedButton } from 'material-ui';

const Form = React.createClass({
  getInitialState() {
    return {
      activeRadio: 'both'
    };
  },

  handleClick() {
    helper.post('api/test', this.state.activeRadio);
  },

  handleChange(event, value) {
    this.setState({
      activeRadio: value
    });
  },

  render() {
    return (
      <div style={{width: '25%', margin: '0 auto'}}>
        <RadioButtonGroup name="type" defaultSelected="both" onChange={this.handleChange}>
          <RadioButton
            value="layout"
            label="Layout"
            style={{marginBottom: 25}} />
          <RadioButton
            value="functional"
            label="Functional"
            style={{marginBottom: 25}}/>
          <RadioButton
            value="both"
            label="Both"
            style={{marginBottom: 25}}/>
        </RadioButtonGroup>
        <RaisedButton label="Test!" style={{width: '100%'}} onClick={this.handleClick}/>
      </div>
    );
  }
});

export default Form;
