import { useState } from "react";

function App() {
  const [value, setValue] = useState("안녕하세요");

  function printConsole() {
    // 콘솔 창에 value 값 출력
    console.log(value);

    // value 값을 변경 (잘못된 방식, 실제로는 상태가 업데이트되지 않음)
    value = "반가워요"; // 이 부분은 React에서 올바르지 않습니다.

    // value 값을 올바르게 변경
    setValue("반가워요");
  }

  return (
    <>
      <h1>{value}</h1>
      <button onClick={printConsole}>클릭</button>
    </>
  );
}

export default App;
