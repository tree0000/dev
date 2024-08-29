import React, {useState} from 'react';

const Say = () =>{
    const[message, setMessage] = useState('');
    const onClickEnter = () => setMessage('로그인되었습니다.')
    const onClickLeave = () => setMessage('로그아웃되었습니다.')


return(
    <div>
        <h1>{message}</h1>
        <button onClick={onClickEnter}>로그인</button>
        <button onClick={onClickLeave}>로그아웃</button>
    </div>
);
};

export default Say;