import React from 'react';

const PriceList = (props) => {
  const { prices } = props;
  return <div>{prices}원</div>;
};

export default PriceList;
