import style from '../../css/components/Counter.css';

import React, {PropTypes} from 'react';

import RaisedButton from 'material-ui/lib/raised-button';

const Counter = React.createClass({

  propTypes: __DEV__ && {
    count: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired
  },

  increment() {
    // maybe I'd like to do something here
    // for the moment I just call the callback passed from the parent
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
