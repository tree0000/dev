import React, { useState } from "react";
import image1 from "./img/grapefruit.jpeg";
import image2 from "./img/Lime.jpeg";
import image3 from "./img/coconut.jpeg";
import image4 from "./img/mango.jpeg";

function MessageForm() {
    const [message, setMessage] = useState({ title: "선택한 과일", content: "" });
    const [image, setImage] = useState(null); 

    function onChangeHandler(e) {
        const selectedFruit = e.target.value;
        const newMessage = { 
            ...message,          
            content: selectedFruit 
        };
        setMessage(newMessage);

       
        switch (selectedFruit) {
            case "grapefruit":
                setImage(image1);
                break;
            case "lime":
                setImage(image2);
                break;
            case "coconut":
                setImage(image3);
                break;
            case "mango":
                setImage(image4);
                break;
            default:
                setImage(null);
        }
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
            
            {}
            {image && (
                <div>
                    <img src={image} alt={message.content} width="150px" />
                </div>
            )}
        </div>
    );
}



//강사님 풀이
// const ImageComponent = () => {
//     const selectList = ["apple", "mango", "banana", "strawberry"];
//     const [select, setSelect] = useState("");

//     const updateValue = (e) => {
//         setSelect(e.target.value);
//     };

//     return (
//         <div>
//             <h1>선택한 과일 : {select}</h1>
//             <select value={select} onChange={updateValue}>
              
//                 {selectList.map((item) => (
//                     <option key={item} value={`../components/img${item}.png`}>{item}</option>
//                 ))}
//             </select>
//             <img src={select} width="150px" alt="과일"/>
//         </div>
//     );
// };


export default MessageForm;