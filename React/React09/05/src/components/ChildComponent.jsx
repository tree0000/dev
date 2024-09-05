import React, { useContext } from 'react';
import {MyContext} from './context'

const ChildComponent = () => {
  const val = useContext(MyContext)
  return (
    <div>
      전달받은 데이터 : {val}
    </div>
  );
};

export default ChildComponent;