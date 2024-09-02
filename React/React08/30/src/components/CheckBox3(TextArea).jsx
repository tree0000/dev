import React, { useState } from "react";

function MessageForm() {
    const [message, setMessage] = useState({ title: "제목", content: "" });

    function onChangeHandler(e) {
        const newMessage = { 
            ...message, 
            title: e.target.value,          
            content: e.target.value 
        };
        setMessage(newMessage);
    }

    function submitHandler(e) {
        e.preventDefault();
        console.log("submit 데이터:", message.content);
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h1>내용: {message.content}</h1>
                <textarea 
                    value={message.content} 
                    onChange={onChangeHandler}
                ></textarea>
                <button type="submit">전송</button>
            </form>
        </div>
    );
}
// 강사님 풀이
// const Submit = () => {
//     const [text, setText] = useState("");

//     function submitHandler(e) {
//         e.preventDefault();
//         console.log("submit으로 받은 데이터 :", text);
//     }

//     function changeHandler(e) {
//         setText(e.target.value);
//     }

//     return (
//         <div>
//             <form onSubmit={submitHandler}>
//                 <h1>내용 : {text}</h1>
//                 <textarea value={text} onChange={changeHandler}></textarea>
//                 <input type="submit"> value="전송"/>
//             </form>
//         </div>
//     );
// };

export default MessageForm;