import React from 'react';

const Prac01 = () => {
  const names = ['HTML', 'CSS', 'Javascript', 'React']; // 'name'을 'names'로 수정
  const nameList = names.map((name, index) => <li key={index}>{name}</li>); // names로 수정하고 key 추가
  return <ul>{nameList}</ul>;
}

export default Prac01;
