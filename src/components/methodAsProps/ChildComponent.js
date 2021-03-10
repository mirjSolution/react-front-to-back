import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      {/* Without passing parameter */}
      {/*  <button onClick={props.greetHandler}>Greet Parent</button> */}
      {/* With parameter */}
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
