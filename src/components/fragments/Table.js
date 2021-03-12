import React from 'react';
import Column from './Column';

function Table() {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
  };
  return (
    <table style={styles}>
      <tbody>
        <tr>
          <Column />
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
