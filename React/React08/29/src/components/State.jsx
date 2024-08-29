import React, { useState } from 'react';


function App (){
    // const [message, setMessage] = useState('');

    // const toggleMessage = () => {

    //     if (message === '하이.') {
    //         setMessage('Hello');
    //     } else {
    //         setMessage('하이.');
    //     }
    // };

    // return (
    //     <div>
    //         <h1>안녕</h1>
    //         <h1>{message}</h1>
    //         <button onClick={toggleMessage}>배열 값 변경</button>
    //     </div>
    // );

const [value, setValue] = useState(["안녕", "하이"]);

  function changeArr() {
    // 객체, 배열의 값을 변경하려면 -> Spread 연산자
    const newValue = [...value];
    newValue[1] = "Hello"; // newValue = ["안녕", "Hello"]
    setValue(newValue); // 상태 업데이트
  }

  return (
    <>
      <h1>{value[0]}</h1>
      <h1>{value[1]}</h1>
      <button onClick={changeArr}>배열 값 변경</button>
    </>
  );

};

export default App;
