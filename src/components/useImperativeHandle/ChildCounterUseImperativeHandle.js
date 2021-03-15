import React, { useState, forwardRef, useImperativeHandle } from 'react';

const ChildCounterUseImperativeHandle = forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    increment,
    yell: () => alert(count),
  }));

  const increment = () => setCount(count + 1);
  return (
    <div>
      <button onClick={increment}>Click</button>
      <h2>Count: {count}</h2>
    </div>
  );
});

export default ChildCounterUseImperativeHandle;
