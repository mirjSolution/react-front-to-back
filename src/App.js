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
import ClickCounter from './components/higherOrderComponent/ClickCounter';
import HoverCounter from './components/higherOrderComponent/HoverCounter';
import ClickCounterTwo from './components/renderProps/ClickCounterTwo';
import HoverCounterTwo from './components/renderProps/HoverCounterTwo';
import User from './components/renderProps/User';
import Counter from './components/renderProps/Counter';
import { UserProvider } from './components/context/userContext';
import ComponentsC from './components/context/ComponentsC';
import PostList from './components/reactHTTP/PostList';
import PostForm from './components/reactHTTP/PostForm';

// import PortalDemo from './components/portals/PortalDemo';
// import Hero from './components/errorboundary/Hero';
// import ErrorBoundary from './components/errorboundary/ErrorBoundary';

// Hooks
import HookCounter from './components/useState/HookCounter';
import HookCounterTwo from './components/useState/HookCounterTwo';
import HookCounterThree from './components/useState/HookCounterThree';
import HookCounterFour from './components/useState/HookCounterFour';
import HookCounterOne from './components/useEffect/HookCounterOne';
import HookMouse from './components/useEffect/HookMouse';
import MouseContainer from './components/useEffect/MouseContainer';
// import IntervalClassCounter from './components/useEffect/IntervalClassCounter';
import IntervalHookCounter from './components/useEffect/IntervalHookCounter';
import DataFetchng from './components/useEffect/DataFetchng';
import ComponentG from './components/useContext/ComponentG';
import CounterReducerOne from './components/useReducer/CounterReducerOne';
import CounterReducerTwo from './components/useReducer/CounterReducerTwo';
import ComponentUseReducerWithUseContext from './components/useReducer/ComponentUseReducerWithUseContext';
import CounterReducerThree from './components/useReducer/CounterReducerThree';
import DataFetchingOne from './components/useReducer/DataFetchingOne';
import DataFetching2 from './components/useReducer/DataFetching2';
import ParentComponentuseCallback from './components/useCallback/ParentComponentuseCallback';
import CounterMemo from './components/useMemo/CounterMemo';
import FocusInputUseRef from './components/useRef/FocusInputUseRef';
import ClassTimer from './components/useRef/ClassTimer';
import HookTimer from './components/useRef/HookTimer';

// import ClassMouse from './components/useEffect/ClassMouse';
// import ClassCounterOne from './components/useEffect/ClassCounterOne';

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
        {/* <h1 style={{ color: 'red' }}>--Error Boundary--</h1>
        <ErrorBoundary>
          <Hero heroName='Batman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Superman' />
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='Joker' />
        </ErrorBoundary> */}
        {/* Higher Order Component */}
        <h1 style={{ color: 'red' }}>
          --Higher Order Components Sharing Functionality--
        </h1>
        <ClickCounter name='Rico' />
        <HoverCounter />
        {/* Render Props */}
        <h1 style={{ color: 'red' }}>--Render Props Sharing Functionality--</h1>

        {/* 1st Aprroach */}
        {/* <Counter
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        /> */}
        {/* 2nd Approach */}
        <Counter>
          {(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <Counter>
          {(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        </Counter>
        <User render={(isLoggedIn) => (isLoggedIn ? 'Rico' : 'Guest')} />
        {/* Context */}
        <h1 style={{ color: 'red' }}>--Context--</h1>
        <UserProvider value='Rico'>
          <ComponentsC />
        </UserProvider>
        {/* React HTTP */}
        <h1 style={{ color: 'red' }}>--React Axios HTTP GET--</h1>
        <PostList />
        <h1 style={{ color: 'red' }}>--React Axios HTTP POST--</h1>
        <PostForm />
        {/* Hooks */}
        <h1 style={{ color: 'red' }}>--------Hooks--------</h1>
        <h1 style={{ color: 'red' }}>--useState--</h1>
        <HookCounter />
        <HookCounterTwo />
        <h1 style={{ color: 'red' }}>--useState using objects--</h1>
        <HookCounterThree />
        <h1 style={{ color: 'red' }}>--useState using array--</h1>
        <HookCounterFour />
        <h1 style={{ color: 'red' }}>--useEffect--</h1>
        <h1 style={{ color: 'red' }}>--Conditionally run effects--</h1>
        {/* <ClassCounterOne /> */}
        <HookCounterOne />
        <h1 style={{ color: 'red' }}>--Run effects only once--</h1>
        {/* <ClassMouse /> */}
        <HookMouse />
        <h1 style={{ color: 'red' }}>--useEffect with cleanup--</h1>
        <MouseContainer />
        <h1 style={{ color: 'red' }}>
          --useEffect with incorrect dependency--
        </h1>
        {/* <IntervalClassCounter /> */}
        <IntervalHookCounter />
        <h1 style={{ color: 'red' }}>--Fetching data with useEffect--</h1>
        <DataFetchng />
        <h1 style={{ color: 'red' }}>--useContext--</h1>
        <ComponentG />
        <h1 style={{ color: 'red' }}>--useReducer--</h1>
        <h1 style={{ color: 'red' }}>--simple state and action--</h1>
        <CounterReducerOne />
        <h1 style={{ color: 'red' }}>--complex state and action--</h1>
        <CounterReducerTwo />
        <h1 style={{ color: 'red' }}>--Multiple useReducers--</h1>
        <CounterReducerThree />
        <h1 style={{ color: 'red' }}>--useReducer with userContext--</h1>
        <ComponentUseReducerWithUseContext />
        <h1 style={{ color: 'red' }}>--Fetching data with useReducer--</h1>
        <DataFetchingOne />
        <DataFetching2 />
        <h1 style={{ color: 'red' }}>--useCallback--</h1>
        <ParentComponentuseCallback />
        <h1 style={{ color: 'red' }}>--useMemo--</h1>
        <CounterMemo />
        <h1 style={{ color: 'red' }}>--useRef--</h1>
        <FocusInputUseRef />
        <ClassTimer />
        <HookTimer />
      </div>
    );
  }
}

export default App;
