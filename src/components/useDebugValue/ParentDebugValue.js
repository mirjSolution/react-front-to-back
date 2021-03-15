import React from 'react';
import useDisplayName from './useDisplayName';

function ParentDebugValue() {
  const displayName = useDisplayName();

  return <div>{displayName}</div>;
}

export default ParentDebugValue;
