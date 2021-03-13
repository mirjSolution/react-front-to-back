import React, { Component } from 'react';
import withCounter from './withCounter';

export class ClickCounter extends Component {
  render() {
    const { count, incrementCount, name } = this.props;
    return (
      <button onClick={incrementCount}>
        {name} Click {count} times
      </button>
    );
  }
}

export default withCounter(ClickCounter, 5);
