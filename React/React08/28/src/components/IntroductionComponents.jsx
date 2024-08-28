import React from 'react';
import '../App.css';

const IntroductionComponents = (props) => {
  return (
    <div>
      안녕하세요. 제 이름은 <span className="name">{props.name}</span>입니다.<br/>
      저는 <span className="age">{props.age}</span>살이고, <span className="address">{props.address}</span>에 살고 있습니다.
    </div>
  );
};

export default IntroductionComponents;