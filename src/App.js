import React, { Component } from 'react';
import './App.css';
import EventBind from './components/bindingEventHandlers/EventBind';
import Welcome from './components/class/Welcome';
import UserGreeting from './components/conditionalRendering/UserGreeting';
import DestructuringClass from './components/destructuring/DestructuringClass';
import DestructuringFunctional from './components/destructuring/DestructuringFunctional';
import EventHandlingClass from './components/eventHandling/EventHandlingClass';
import EventHandlingFunctional from './components/eventHandling/EventHandlingFunctional';
import Form from './components/formHandling/Form';

// Name export
// import {Greet} from './components/functional/greet';
import Greet from './components/functional/Greet';
import Hello from './components/jsx/Hello';
import NameList from './components/listRendering/NameList';
import ParentComponent from './components/methodAsProps/ParentComponent';
import ClassProps from './components/props/ClassProps';
import FunctionProps from './components/props/FunctionProps';
import SetState from './components/setState/SetState';
import ClassState from './components/state/ClassState';
import Inline from './components/stylingAndCssBasics/Inline';
import ModuleCss from './components/stylingAndCssBasics/ModuleCss';
import Stylesheet from './components/stylingAndCssBasics/Stylesheet';
import LifeCycleMountingParent from './components/componentMountingLifecycleMethod/LifeCycleMountingParent';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <h1 style={{ color: 'blue' }}>
          --See the source code on each of the subfolder inside the components
          folder--
        </h1>
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
        <SetState incrementBy={2} />
        {/* Destructuring in functional and class component*/}
        <h1 style={{ color: 'red' }}>--Sample Destructuring Functional--</h1>
        <DestructuringFunctional firstName='Bruce' heroName='Batman' />
        {/* Destructuring in functional and class component*/}
        <h1 style={{ color: 'red' }}>--Sample Destructuring Class--</h1>
        <DestructuringClass firstName='Clark' heroName='Superman' />
        {/* Event Handling in functional and class component*/}
        <h1 style={{ color: 'red' }}>--Sample Event Handling Functional--</h1>
        <EventHandlingFunctional />
        <h1 style={{ color: 'red' }}>--Sample Event Handling Class--</h1>
        <EventHandlingClass />
        {/* Binding Event Handler*/}
        <h1 style={{ color: 'red' }}>--Sample Binding Event Handler--</h1>
        <EventBind />
        {/* Method as Props*/}
        <h1 style={{ color: 'red' }}>--Sample Method as Props--</h1>
        <ParentComponent />
        {/* Conditional Rendering */}
        <h1 style={{ color: 'red' }}>--Sample Conditional Rendering--</h1>
        <UserGreeting />
        {/* List Rendering */}
        <h1 style={{ color: 'red' }}>--Sample List Rendering--</h1>
        <NameList />
        {/* Styling and CSS Basics */}
        <h1 style={{ color: 'red' }}>--Sample Styling using External CSS --</h1>
        <Stylesheet primary={true} />
        <h1 style={{ color: 'red' }}>--Sample Styling using Inline CSS --</h1>
        <Inline />
        <h1 style={{ color: 'red' }}>--Sample Styling using CSS Modules --</h1>
        <ModuleCss />
        {/* Basic of Form Handling */}
        <h1 style={{ color: 'red' }}>--Basics of Form Handling --</h1>
        <Form />
        {/* Lifecycle Methods */}
        <h1 style={{ color: 'red' }}>
          --Component Mounting Lifecycle Methods --
        </h1>
        <p>
          --Check the browser console to see the order of execution during the
          mounting phase--
        </p>
        <LifeCycleMountingParent />
      </div>
    );
  }
}

export default App;
