import React, { Component } from 'react';

class EventHandlingClass extends Component {
  clickHandler() {
    alert('Button Clicked');
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Class Event Handling</button>
      </div>
    );
  }
}

export default EventHandlingClass;
