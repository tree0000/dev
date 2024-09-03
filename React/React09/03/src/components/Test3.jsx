import React, { useEffect, useState, useRef } from "react";

const Prac03 = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log("랜더링 완료, 렌더링 횟수:", renderCount.current);
  });

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>클릭</button>
    </div>
  );
};

export default Prac03;