import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    //  If else statement doesnt work inside the jsx
    // ----Sample 1. If/Else approach----
    //   if (this.state.isLoggedIn) {
    //   return <div>Welcome Rico</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // ----Sample 2. Element variable approach----
    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Rico</div>;
    // } else {
    //   message = <div>Welcome guest</div>;
    // }
    // return <div>{message}</div>;
    // ----Sample 3. Ternary Conditional Operator Approach -----
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Rico</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );
    // ----Sample 4. Short Circuit Operator Approach (use this approach when you want to render something or render nothing)
    return this.state.isLoggedIn && <div>Welcome Rico</div>;
  }
}

export default UserGreeting;
