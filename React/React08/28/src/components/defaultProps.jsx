import React from "react";

//자바스크립트 디폴트 파라미터
const DefaultProps = ({ name="리액트" }) => {
  return <div>안녕하세요. 제 이름은 {name}입니다.</div>;
};

//컴포넌트이름 .defaultProps ={키:값}
DefaultProps.defaultProps = {
  name: "리액트",
};

export default DefaultProps;
