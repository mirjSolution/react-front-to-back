import React from 'react';
import './App.css';

// Name export
// import {Greet} from './components/functional/greet';
import Greet from './components/functional/greet';

class App extends React.Component { 
  render() {
    return (
      <div className="App">
        {/* Sample functinal components */}
        <Greet />
      </div>
    );
  }
}
  


export default App;
