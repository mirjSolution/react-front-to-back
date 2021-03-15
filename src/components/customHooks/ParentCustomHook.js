import React from 'react';
import DocTitleOne from './DocTitleOne';
import DocTitleTwo from './DocTitleTwo';

function ParentCustomHook() {
  return (
    <div>
      <DocTitleOne />
      <DocTitleTwo />
    </div>
  );
}

export default ParentCustomHook;
