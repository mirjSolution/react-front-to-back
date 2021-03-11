import React, { Component } from 'react';

class LifeCycleUpdatingChildren extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Rico',
    };

    console.log('Lifecycle Updating constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('Lifecycle Updating Children getDerivedStateFromProps');
    return null;
  }

  shouldComponentUpdate() {
    console.log('Lifecycle Updating Children shouldComponentUpdate');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Lifecycle Updating Children getSnapshotBeforeUpdate');
    return null;
  }

  componentDidUpdate() {
    console.log('Lifecycle Updating Children componentDidUpdate');
  }

  render() {
    console.log('Lifecycle Updating Children render');
    return <div>Lifecycle Updating Children</div>;
  }
}

export default LifeCycleUpdatingChildren;
