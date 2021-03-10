import React, { Component } from 'react';

class DestructuringClass extends Component {
  render() {
    const { firstName, heroName } = this.props;
    // const { state1, state2 } = this.state;
    return (
      <div>
        <h1>
          {firstName} a.k.a. {heroName}
        </h1>
      </div>
    );
  }
}

export default DestructuringClass;
