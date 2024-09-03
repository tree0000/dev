import React, { useState, useEffect } from "react";

const Test = () => {
//   const [count, setCount] = useState(0);
//   const [text, setText] = useState("");


//   // 컴포넌트가 처음 렌더링될 때 실행
//   useEffect(() => {
//     console.log("렌더링이 완료되었습니다.");
//   }, []);

//   // count 값이 변경될 때 실행
//   useEffect(() => {
//     console.log("count 값이 변경되었습니다.");
//   }, [count]);

//   // text 값이 변경될 때 실행
//   useEffect(() => {
//     console.log("text 값이 변경되었습니다.");
//   }, [text]);

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <input
//         type="text"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         placeholder="텍스트 입력"
//       />
//       <p>{text}</p>
//     </div>
//   );

const [count, setCount] = useState(0);

  const increment = () => {
    console.log("Before updating:", count); // 0
    setCount(count + 1); // 상태 업데이트 요청 -> 비동기적으로 처리됨
   
  };

  useEffect(()=>{
    console.log("After updating:", count); // 0
  },[count]);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );

};

export default Test;