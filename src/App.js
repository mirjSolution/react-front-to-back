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
import LifeCycleUpdatingParent from './components/componentUpdatingLifecycleMethod/LifeCycleUpdatingParent';
import FragmentDemo from './components/fragments/FragmentDemo';
import Table from './components/fragments/Table';
import ParentComp from './components/PureComponent/ParentComp';
import ParentComp1 from './components/memo/ParentComp1';
import RefsDemo from './components/refs/RefsDemo';
import FocusInput from './components/refs/FocusInput';
import FRParentInput from './components/refs/FRParentInput';
// import PortalDemo from './components/portals/PortalDemo';
import Hero from './components/errorboundary/Hero';
import ErrorBoundary from './components/errorboundary/ErrorBoundary';

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
        <h1 style={{ color: 'red' }}>
          --Component Updating Lifecycle Methods --
        </h1>
        <p>
          --Check the browser console to see the order of execution during the
          updating phase nd click the change state button--
        </p>
        <LifeCycleUpdatingParent />
        {/* Lifecycle Methods */}
        <h1 style={{ color: 'red' }}>--Fragments--</h1>
        <FragmentDemo />
        <Table />
        {/* Pure Components */}
        <h1 style={{ color: 'red' }}>--Pure Components Class--</h1>
        <ParentComp />
        {/* Memo */}
        <h1 style={{ color: 'red' }}>--Memo Functional Component--</h1>
        <ParentComp1 />
        {/* Refs */}
        <h1 style={{ color: 'red' }}>--Refs--</h1>
        <RefsDemo />
        <p> Ref to a child component from a parent component </p>
        <FocusInput />
        <p> Ref forwarding</p>
        <FRParentInput />
        {/* Portals */}
        {/* <h1 style={{ color: 'red' }}>--Portals--</h1>
        <p> Portals </p>
        <PortalDemo /> */}
        {/* Error Boundary */}
        <h1 style={{ color: 'red' }}>--Error Boundary--</h1>
        <ErrorBoundary>
          <Hero heroName='Batman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Superman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Joker' />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
