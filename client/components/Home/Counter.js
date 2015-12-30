import style from '../../css/components/Counter.css';

import React, {PropTypes} from 'react';

import RaisedButton from 'material-ui/lib/raised-button';

const Counter = React.createClass({

  propTypes: __DEV__ && {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired
  },

  // Render Methods

  increment() {
    return this.props.onIncrement();
  },

  render() {
    const {count} = this.props;

    return (
      <div className={style.counter}>
        <h1>Count: {count}</h1>
        <p>Click the button to increment the counter</p>
        <RaisedButton label="Increment" onClick={this.increment}/>
      </div>
    );
  }
});

export default Counter;
