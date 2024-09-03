import React, { useState, useRef, useEffect } from "react";

function Test2() {
  const [Count, setCount] = useState(0);
  const refCount = useRef(0);

  const incrementState = () => {
    setCount(Count + 1);
  };

  const incrementRef = () => {
    refCount.current += 1;
    console.log("Ref 값 변경:", refCount.current);
  };

  useEffect(() => {
    console.log("STATE 변경:", setCount);
  }, [setCount]);

  return (
    <div>
      <p>State 값: {Count}</p>
      <p>Ref 값: {refCount.current}</p>
      <button onClick={incrementState}>State</button>
      <button onClick={incrementRef}>Ref</button>
    </div>
  );
}

export default Test2;