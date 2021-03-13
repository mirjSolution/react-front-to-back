import React, { Component } from 'react';
import ComponentsE from './ComponentsE';
import UserContext from './userContext';

class ComponentsD extends Component {
  static contextType = UserContext;

  render() {
    return (
      <div>
        Component D context {this.context}
        <ComponentsE />
      </div>
    );
  }
}

// Component.contextType = UserContext;

export default ComponentsD;
