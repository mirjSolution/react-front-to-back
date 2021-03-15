import { useState, useEffect, useDebugValue } from 'react';

function useDisplayName() {
  const [displayName, setDisplayName] = useState('');

  useEffect(() => {
    setDisplayName('Rico');
  }, []);

  useDebugValue(displayName ?? 'loading');

  return displayName;
}

export default useDisplayName;
