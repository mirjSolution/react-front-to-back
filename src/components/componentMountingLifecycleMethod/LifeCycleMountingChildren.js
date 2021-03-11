import React, { Component } from 'react';

class LifeCycleMountingChildren extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Rico',
    };

    console.log('Lifecycle Mounting children constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle Mounting Children getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('Lifecycle mounting Children componentDidMount');
  }

  render() {
    console.log('Lifecycle mounting Children render');
    return <div>Lifecycle Mounting Children</div>;
  }
}

export default LifeCycleMountingChildren;
