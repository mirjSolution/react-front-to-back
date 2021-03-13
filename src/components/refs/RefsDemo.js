import React, { Component } from 'react';

class RefsDemo extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.inputRef1 = React.createRef();
    // Old way using call back
    // this.cbRef = null;
    // this.setCbRef = (element) => {
    //   this.cbRef = element;
    // };
  }

  componentDidMount() {
    //   Old way using call back
    // if (this.cbRef) {
    //   this.cbRef.focus();
    // }
    this.inputRef.current.focus();
    console.log(this.inputRef);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value + ' ' + this.inputRef1.current.value);
  };

  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />
        <input type='text' ref={this.inputRef1} />
        {/* Old way using callback */}
        {/* <input type='text' ref={this.setCbRef} /> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
