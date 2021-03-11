import React, { Component } from 'react';
import LifeCycleUpdatingChildren from './LifeCycleUpdatingChildren';

class LifeCycleUpdatingParent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Rico',
    };

    console.log('Lifecycle Updating Parent constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle Updating Parent getDerivedStateFromProps');
    return null;
  }

  shouldComponentUpdate() {
    console.log('Lifecycle Updating Parent shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Lifecycle Updating Parent getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('Lifecycle Updating Parent componentDidUpdate');
  }

  changeState = () => {
    this.setState({ name: 'mirjSolution' });
  };

  render() {
    console.log('Lifecycle Updating Parent render');
    return (
      <div>
        Lifecycle Updating Parent
        <LifeCycleUpdatingChildren />
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}

export default LifeCycleUpdatingParent;
