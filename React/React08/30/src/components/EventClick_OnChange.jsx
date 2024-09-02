import React, { useState } from "react";

const EventOnChange = () => {
    const [form, setForm] = useState({
        username: '',
        message: '',
    });

    const { username, message } = form;

    const onChange = e => {
        const nextForm = {
            ...form, 
            [e.target.name]: e.target.value 
        };
        setForm(nextForm);
    };

    const onClick = () => {
        console.log(username + ': ' + message);
        setForm({
            username: '',
            message: '',
        });
    };

    const onKeyPress = e => {
        if (e.key === 'Enter') {
            onClick();
        }
    };

    return (
        <div>
            <h1>사용자 이름: {username}</h1>
            <h1>내용: {message}</h1>
            <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={username}
                onChange={onChange}
            />
            <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={message}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick={onClick}>확인</button>
        </div>
    );
};

//강사님 풀이 

// function App() {
//   // 2. useState() 설계 -> 초기값: 객체
//   const [form, setForm] = useState({ username: "", message: "" });

//   function onChangeHandler(e) {
//       // 객체나 배열의 값을 변경 => Spread 연산자
//       Spread 연산자로 값 복사한 경우 -> 뒤에나오는 값이 최신 값
//        key를 만들 때는 "e.taget.name"으로 만들면 새로운 key를 생성
//         key를 만들 때는 [] 사용
//       const newForm = { ...form, [e.target.name]: e.target.value };

//       // 원본 form 객체를 -> newForm의 값으로 변경
//       setForm(newForm);
//   }

//   return (
//       <>
//           <h1>사용자 이름 : {form.username}</h1>
//           <h1>내용 : {form.message}</h1>

//           {/* 1. input 태그에 name 값 달기 */}
//           {/* 3. 함수 만들기 (onChangeHandler) */}
//           <input type="text" name="username" onChange={onChangeHandler} />
//           <input type="text" name="message" onChange={onChangeHandler} />
//       </>
//   );
// }


export default EventOnChange;
