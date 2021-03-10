import React, { Component } from 'react';

class ClassProps extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <h1>{`Hello ${this.props.firstName} ${this.props.nickName}`}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default ClassProps;
