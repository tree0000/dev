import React from 'react';

function App() {
  const prices = [1000, 2000, 3000, 4000];

  return (
    <div>
      <h1>가격목록</h1>
      {prices.map((price, index) => (
        <div key={index}>
          가격: {price}원
        </div>
      ))}
    </div>
  );
}

export default App;