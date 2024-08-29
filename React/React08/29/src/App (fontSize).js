import React, { useState } from 'react';

function App() {
  // 초기값을 배열로 설정한 상태 변수
  const [인사, 인사변경] = useState(['안녕하세요', '졸려', '맞아']);

  // 초기값을 "50px"로 설정한 상태 변수
  const [font, setFont] = useState("50px");

  // fontSize 스타일 객체 생성
  const fontSize = {
    fontSize: font,
  };

  return (
    <>
      <div style={fontSize}>{인사[0]}</div>
      <div style={fontSize}>{인사[1]}</div>
      <div style={fontSize}>{인사[2]}</div>
      <div style={fontSize}>{font}</div>
    </>
  );
}

export default App;
