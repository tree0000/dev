import React, { useState } from "react";


function MessageForm() {
    const [message, setMessage] = useState({ title: "선택한 과일", content: "" });

    function onChangeHandler(e) {
        const newMessage = { 
            ...message,          
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
                <h1>{message.title}: {message.content}</h1>
                <select value={message.content} onChange={onChangeHandler}>
                    <option value="grapefruit">Grapefruit</option>
                    <option value="lime">Lime</option>
                    <option value="coconut">Coconut</option>
                    <option value="mango">Mango</option>
                </select>
                <button type="submit">전송</button>
            </form>
        </div>
    );
}
// 강사님 풀이
// return (
//     <div>
//         {/* <select> 태그의 value 속성 = 선택된 option 값 */}
//         <select value={select} onChange={changeHandler}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//         </select>
//         <input type="submit" value="전송" />
//     </div>
// );



export default MessageForm;