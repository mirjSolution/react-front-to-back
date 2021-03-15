import React, { useRef } from 'react';
import ChildCounterUseImperativeHandle from './ChildCounterUseImperativeHandle';

function ParentCounterUseImperativeHandler() {
  const ref = useRef();
  return (
    <div>
      <ChildCounterUseImperativeHandle ref={ref} />

      <button onClick={() => ref.current.increment()}>Another button</button>
      <button onClick={() => ref.current.yell()}>What is the count?</button>
    </div>
  );
}

export default ParentCounterUseImperativeHandler;
