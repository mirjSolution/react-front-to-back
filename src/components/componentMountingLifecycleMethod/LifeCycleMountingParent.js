import React, { Component } from 'react';
import LifeCycleMountingChildren from './LifeCycleMountingChildren';

class LifeCycleMountingParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Rico',
    };

    console.log('Lifecycle Mounting Parent constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle Mounting Parent getDerivedStateFromProps');
    return null;
  }

  componentDidMount() {
    console.log('Lifecycle Mounting Parent componentDidMount');
  }

  render() {
    console.log('Lifecycle Mounting Parent render');
    return (
      <div>
        Lifecycle Mounting Parent
        <LifeCycleMountingChildren />
      </div>
    );
  }
}

export default LifeCycleMountingParent;
