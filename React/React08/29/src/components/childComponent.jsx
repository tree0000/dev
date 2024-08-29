import React, { useState } from 'react';

  const ChildComponent = () => {
  const [value, setValue] = useState('');

  
  function updateValue(e) {
    console.log(e.target.value); 
    setValue(e.target.value); 
  }

  return (
    <>
      <h3>입력: <input type="text" onChange={updateValue} /></h3>
      <h3>자식 컴포넌트에서 관리하는 값: {value}</h3>
    </>
  );
}

export default ChildComponent;
