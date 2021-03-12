import React, { PureComponent } from 'react';
import MemoComp from './MemoComp';

class ParentComp1 extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Rico',
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Rico',
      });
    }, 2000);
  }

  render() {
    console.log(
      '******************Parent Component Render for Memo Component******************'
    );
    return (
      <div>
        Parent Component Render for Memo Component
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp1;
