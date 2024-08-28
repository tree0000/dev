import React from 'react';

function Wrapper({ children }) { // children을 props로 받아옵니다.
  const style = {
    border: '3px solid red',
    padding: '30px'
  };

  return (
    <div style={style}>
      {children} {}
    </div>
  );
}

export default Wrapper;
