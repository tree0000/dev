import React, { useState } from "react";

// function Submit1() {

//     const [message, setMessage] = useState({ title: "", color: "black", content: "" });

//     function onChangeHandler(e) {
//         const newMessage = { 
//             ...message, 
//             title: e.target.value,        
//             content: e.target.value 
//         };

//         setMessage(newMessage);
//     }
//     function onClickHandler() {
//         console.log(`입력: ${message.content}`);
//     }
  
//     return (
//         <>
//             <h1 style={{ color: message.color }}>{message.title}</h1>

//             <input 
//                 type="text" 
//                 name="content" 
//                 placeholder="이름을 입력하세요"
//                 onChange={onChangeHandler} 
//             />
//             <button onClick={onClickHandler}>출력</button>
//         </>
//     );
// }


//강사님 풀이
const Submit1 = () => {
    const [form, setForm] = useState("");

    function onChangeHandler(e) {
        setForm(e.target.value);
    }

    function submitHandler(e) {
        e.preventDefault();
        console.log("출력:", form);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>이름: {form}</h1>
                <input type="text" onChange={onChangeHandler} />
                <input type="submit" value="전송" />
            </form>
        </div>
    );
};

export default Submit1;