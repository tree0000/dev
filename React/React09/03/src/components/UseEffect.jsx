import React, {useState, useEffect} from "react";
 


//콜백함수만 사용한 경우 - 렌더링이 발생하는 마다 실행됨
function UseEffect() {
   const [names, setNames] = useState(()=>heavyWork());
   const [input, setInput] = useState("");
 
   function heavyWork() {
        for(let i =0; i < 1000; i++){
           console.log("계산중");
        }
        return['타리','리액트']
   }
 
   function InputChange(e) {
     setInput(e.target.value);
   }
 
   function uploadInput() {
     setNames((prevState) => [input, ...prevState]);
     setInput(""); // 입력 필드 초기화
   }

   useEffect(()=>{
       console.log("렌더링 완료");
       console.log({names});
       
   },[names])
   //[] 최초의 한번만 작업 진행
   //[names] names가 업데이트 될 때 실행된다.

 
   return (
     <div>
       <input type="text" onChange={InputChange} value={input} />
       <button onClick={uploadInput}>추가</button>
       <div>
         <ul>
           {names.map((name, idx) => (
             <li key={idx}>{name}</li>
           ))}
         </ul>
       </div>
     </div>
   );
 }

 export default UseEffect;