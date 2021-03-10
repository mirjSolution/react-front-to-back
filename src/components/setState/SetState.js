import React, { Component } from 'react';

class SetState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  increment() {
    this.setState(
      {
        counter: this.state.counter + 1,
      },
      () => console.log('Callback ' + this.state.counter)
    );
    console.log('Synchoronous ' + this.state.counter);
  }

  incrementByProps() {
    this.setState(
      (prevState, props) => ({
        counter: prevState.counter + props.incrementBy,
      }),
      () => console.log('Callback ' + this.state.counter)
    );
    console.log('Synchoronous ' + this.state.counter);
  }

  render() {
    return (
      <div>
        <h1>Counter - {this.state.counter}</h1>
        <button onClick={() => this.increment()}>Increment by 1</button>
        <button onClick={() => this.incrementByProps()}>Increment by 5</button>
      </div>
    );
  }
}

export default SetState;
