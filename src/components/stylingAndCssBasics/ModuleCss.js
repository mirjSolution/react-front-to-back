import React from 'react';

import './appStyles.css';
import styles from './appStyles.module.css';

function ModuleCss() {
  return (
    <div>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default ModuleCss;
