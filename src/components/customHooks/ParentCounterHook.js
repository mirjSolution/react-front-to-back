import React from 'react';
import CounterOneCustom from './CounterOneCustom';
import CounterTwoCustom from './CounterTwoCustom';

function ParentCounterHook() {
  return (
    <div>
      <CounterOneCustom />
      <CounterTwoCustom />
    </div>
  );
}

export default ParentCounterHook;
