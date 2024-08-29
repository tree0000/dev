import { useState } from "react";

const ButtonComponent = () => {
  const [message, setMessage] = useState('');

  const onClick1 = () => setMessage('안녕하세요');
  const onClick2 = () => setMessage('안녕히가세요');

  return (
    <div>
      <button onClick={onClick1}>안녕하세요 버튼</button>
      <button onClick={onClick2}>안녕히가세요 버튼</button>
      <h1>{message}</h1>
    </div>
  );
}

export default ButtonComponent;
