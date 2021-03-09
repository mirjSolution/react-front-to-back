import React, { Component } from 'react';
import './App.css';
import Welcome from './components/class/Welcome';

// Name export
// import {Greet} from './components/functional/greet';
import Greet from './components/functional/Greet';

class App extends Component { 
  render() {
    return (
      <div className="App">
        {/* Sample functional component */}
        <Greet />
        {/* Sample class component */}
        <Welcome />
      </div>
    );
  }
}
  


export default App;
