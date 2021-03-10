import React, { Component } from 'react';
import './App.css';
import Welcome from './components/class/Welcome';

// Name export
// import {Greet} from './components/functional/greet';
import Greet from './components/functional/Greet';
import Hello from './components/jsx/Hello';
import ClassProps from './components/props/ClassProps';
import FunctionProps from './components/props/FunctionProps';
import SetState from './components/setState/SetState';
import ClassState from './components/state/ClassState';

class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* Sample functional component */}
        <Greet />
        {/* Sample class component */}
        <Welcome />
        {/* Sample JSX and without JSX*/}
        <Hello />
        {/* Sample Props using function component*/}
        <h1 style={{ color: 'red' }}>
          --Sample Props using function component--
        </h1>
        <FunctionProps firstName='Rico' nickName='Dada'>
          <p>Props with paragraph children</p>
        </FunctionProps>
        <FunctionProps firstName='Myles' nickName='Mimi'>
          <button>Props with button children</button>
        </FunctionProps>
        <FunctionProps firstName='Xiegryd' nickName='Xiejei'>
          <h2>Props with h2 children</h2>
        </FunctionProps>
        <FunctionProps firstName='Xiegryd' nickName='Xiejei' />
        {/* Sample Props using functional component*/}
        <h1 style={{ color: 'red' }}>--Sample Props using class component--</h1>
        <ClassProps firstName='Rico' nickName='Dada'>
          <p>Props with paragraph children</p>
        </ClassProps>
        <ClassProps firstName='Myles' nickName='Mimi'>
          <button>Props with button children</button>
        </ClassProps>
        <ClassProps firstName='Xiegryd' nickName='Xiejei'>
          <h2>Props with h2 children</h2>
        </ClassProps>
        <ClassProps firstName='Xiegryd' nickName='Xiejei' />
        {/* Sample State using class component*/}
        <h1 style={{ color: 'red' }}>--Sample State using class component--</h1>
        <ClassState />
        {/* Sample using setState*/}
        <h1 style={{ color: 'red' }}>--Sample using setState--</h1>
        <SetState incrementBy={5} />
      </div>
    );
  }
}

export default App;
