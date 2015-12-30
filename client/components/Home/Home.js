import style from '../../css/components/Home.css';
import styles from './HomeStyling';

import React from 'react';
import Helmet from 'react-helmet';

import Paper from 'material-ui/lib/paper';
import Counter from './Counter';

const Home = React.createClass({
  getInitialState() {
    return {
      counter: 0
    };
  },

  // Render Methods

  increment() {
    this.setState({
      counter: this.state.counter += 1
    });
  },

  render() {
    return (
      <div>
        <Helmet title="Automate"/>
        <Paper style={styles.paper}>
          <section className={style.section}>
            <Counter
              count={this.state.counter}
              onIncrement={this.increment}
            />
          </section>
        </Paper>
      </div>
    );
  }
});

export default Home;
