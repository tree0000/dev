 import React, { useState, useRef } from "react";

// const UseRefDom = () => {
//   const inputRef = useRef();
//   const [displayText, setDisplayText] = useState(""); // 화면에 표시될 텍스트
//   const inputValueRef = useRef(""); // 입력된 값을 저장하는 ref

//   const handleButtonClick = () => {
//     setDisplayText(inputValueRef.current);
//     console.log(inputValueRef.current);
//   };

//   const handleInputChange = (e) => {
//     inputValueRef.current = e.target.value;
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         ref={inputRef}
//         onChange={handleInputChange}
//         placeholder="텍스트를 입력"
//       />
//       <button onClick={handleButtonClick}>전송</button>
//       <p>전송된 단어 : {displayText}</p>
//     </div>
//   );
// };

// export default UseRefDom;


//강사님

const Prac04 = () => {
  const [currentText, setCurrentText] = useState("");
  const inputRef = useRef(); // inputRef = { current : input }




  function sendBtnHandler(e) {
    //input 태그안의 속성:inputRef.current.value
    setCurrentText(inputRef.current.value); // 렌더링 -> inputRef.current.value 화면 업데이트
    console.log("렌더링 완료");
  }

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={sendBtnHandler}>전송</button>
      <h3>전송된 단어 : {currentText}</h3>    
    </div>
    //리액트는 value="" 속성을 주면 키보드로 정보 값 처리를 하지 못한다.

  );
};


export default Prac04;
