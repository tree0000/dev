//UseRef 컴포넌트 내부에서 사용되는 변수를 저장함

import React, { useRef } from "react";


const UseRefComponent1 = () => {
const ref = useRef("안녕하세요");
console.log("변경 전 ref 값 : ", ref.current);
ref.current = "Hello";
console.log("변경 후 ref 값 : ", ref.current);
return <div></div>;
};


export default UseRefComponent1;