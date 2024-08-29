import React, { useState } from 'react';
import UserID from './components/UserID';
import UserPW from './components/UserPW';

function App() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const correctId = 'qwer1234'; 
  const correctPw = '12345'; 

  const handleLogin = () => {
    if (id === correctId && pw === correctPw) {
      alert('로그인 성공!');
    } else {
      alert('아이디와 패스워드를 확인하세요');
    }
  };

  return (
    <div>
      <h1>로그인</h1>
      <UserID id={id} setId={setId} />
      <UserPW pw={pw} setPw={setPw} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default App;
