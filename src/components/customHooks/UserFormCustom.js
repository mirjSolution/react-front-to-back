import React from 'react';
import useInput from './useInput';

function UserFormCustom() {
  const [firstName, bindFirstName, resetFirstName] = useInput('');

  const [lastName, bindLastName, resetLastName] = useInput('');

  const submitHandler = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name</label>
          <input {...bindFirstName} type='text' />
        </div>
        <div>
          <input {...bindLastName} type='text' />
        </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default UserFormCustom;
