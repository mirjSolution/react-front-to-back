import React, { useState, useRef } from 'react';
import { useForm } from './useForm';
import { Hello } from './Hello';
import { useMeasure } from './useMeasure';

function ParentUseLayoutEffect() {
  const [values, handleChange] = useForm({
    email: '',
    password: '',
    firstName: '',
  });

  const inputRef = useRef();
  const hello = useRef(() => console.log('hello'));

  const [showHello, setShowHello] = useState(true);

  const [rect, inputRef2] = useMeasure([]);

  console.log(rect);
  return (
    <div>
      <>
        <button onClick={() => setShowHello(!showHello)}>toggle</button>
        {showHello && <Hello />}
        <input
          ref={inputRef}
          name='email'
          value={values.email}
          onChange={handleChange}
        />
        <input
          ref={inputRef2}
          name='firstName'
          placeholder='first name'
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          value={values.password}
          onChange={handleChange}
        />
        <button
          onClick={() => {
            inputRef.current.focus();
            hello.current();
          }}
        >
          focus
        </button>
      </>
    </div>
  );
}

export default ParentUseLayoutEffect;
