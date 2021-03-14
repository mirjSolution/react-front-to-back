import React from 'react';
import ComponentH from './ComponentH';
import ComponentI from './ComponentI';

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function ComponentG() {
  return (
    <div>
      <UserContext.Provider value={'Rico'}>
        <ChannelContext.Provider value={'MirjSolution'}>
          <ComponentH />
          <ComponentI />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default ComponentG;
