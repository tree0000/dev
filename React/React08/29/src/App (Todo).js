import React from 'react';
import PriceList from './components/PriceList';

function App() {
  const priceList = [1000, 2000, 3000, 4000];

  return (
    <div>
      <h1>가격목록</h1>
      {priceList.map((price) => (
        <PriceList prices={price} key={price} />
      ))}
    </div>
  );
}

export default App;
