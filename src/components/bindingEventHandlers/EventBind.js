import React, { Component } from 'react';

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello',
    };

    // 3. Binding in the class contsructor
    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: 'Goodbye',
  //     });
  //     console.log(this);
  //   }

  //   4. Class property as Arrow function
  clickHandler = () => {
    this.setState({
      message: 'Goodbye',
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* 1. This method will re-render every click (binding in the render method) */}
        {/*  <button onClick={this.clickHandler.bind(this)}>Click Me</button> */}
        {/* 2. Arrow function in the render method */}
        {/* <button onClick={() => this.clickHandler()}>Click Me</button> */}
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default EventBind;
