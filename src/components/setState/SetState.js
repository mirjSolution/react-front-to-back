import React, { Component } from 'react';

class SetState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
    // Sample binding in the class constructor
    this.increment = this.increment.bind(this);
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
  // Class property as arrow function automatically bind the property
  incrementByProps = () => {
    this.setState(
      (prevState, props) => ({
        counter: prevState.counter + props.incrementBy,
      }),
      () => console.log('Callback ' + this.state.counter)
    );
    console.log('Synchoronous ' + this.state.counter);
  };

  render() {
    return (
      <div>
        <h1>Counter - {this.state.counter}</h1>
        <button onClick={this.increment}>Increment by 1</button>
        <button onClick={this.incrementByProps}>
          Increment by {this.props.incrementBy}
        </button>
      </div>
    );
  }
}

export default SetState;
