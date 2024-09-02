import React, { useState } from "react";

function EventOnChange2() {

    const [message, setMessage] = useState({ title: "제목", color: "black", content: "" });

    function onChangeHandler(e) {
        const newMessage = { 
            ...message, 
            title: e.target.value, 
            color: "red",           
            content: e.target.value 
        };

        setMessage(newMessage);
    }
    function onClickHandler() {
        alert(`입력된 내용: ${message.content}`);
    }
    //엔터키누르면 호출
    // const EnterHandler = e => {
    //     if (e.key === 'Enter') {
    //         onClickHandler();  // 엔터 키가 눌렸을 때 onClickHandler를 호출
    //     }
    // };
    return (
        <>
            <h1 style={{ color: message.color }}>{message.title}</h1>

            <input 
                type="text" 
                name="content" 
                placeholder="내용을 입력하세요"
                onChange={onChangeHandler} 
            />
            <button onClick={onClickHandler}>출력</button>
        </>
    );
}

//강사님 풀이
// function App() {
//     const [message, setMessage] = useState({ title: "제목", color: "black" });

//     function changeMessage(msg) {
//         // msg = e.target.value = title
//         // console.log(msg)
//         // 객체 값 변경 -> Spread 연산자
//         const newMessage = { ...message };
//         newMessage.title = msg;
//         newMessage.color = "red";

//         // 원본 객체를 새로운 객체 변경
//         setMessage(newMessage);
//     }

//     function showMessage() {
//         alert(message.title);
//     }

//     return (
//         <>
//             <h1 style={{ color: message.color }}>{message.title}</h1>
//             <input
//                 type="text"
//                 onChange={(e) => changeMessage(e.target.value)}
//                 placeholder="내용을 입력하세요"
//             />
//             <button onClick={showMessage}>출력</button>
//         </>
//     );
// }

export default EventOnChange2;
