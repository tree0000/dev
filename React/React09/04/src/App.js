import logo from './logo.svg';
import './App.css';
import ChildComponent from './components/ChildComponent';
import { useCallback, useEffect, useState } from 'react';
import Counter from './components/Counter';
import Dessert from './components/dessert/Dessert';
import Bank from './components/bank/Bank';
import Member from './components/member/Member'

function App() {
  //실습1
  // const [count, setCount] = useState(0);

  // // const clickHandler = () => {
  // //   console.log('count', count)
  // // }

  // // useEffect(() => { //렌더링 될 때마다 useEffect 호출
  // //   console.log('렌더링 완료')
  // // })

  // // useEffect(() => { //clickHandler만 변경될 때마다 useEffect 호출 -> 하지만 count 값이 바뀔 때도 계속 실행됨
  // //   console.log('렌더링 완료')
  // // }, [clickHandler])

  // //usecallback 사용
  // const clickHandler = useCallback(() => {
  //   console.log('count', count)
  // },[count]) 
  
  //실습2
  // const [count, setCount] = useState(0)
  // // const updateHandler = () => {
  // //   console.log('update');
  // // }

  // const updateHandler = useCallback(() => {
  //   console.log('update');
  // }, [])

  return (
    //실습1
    // <div>
    // <input type="number" value={count} onChange={(e) => setCount(e.target.value)}/>
    // <button onClick={clickHandler}>숫자 출력</button>
    // </div>

    //실습2
    // <div>
    //   <input type="number" onChange={(e) => setCount(e.target.value)} />
    //   <ChildComponent update={updateHandler}/>
    // </div>

    //실습3
    // <div>
    //   <Counter />
    // </div>

    //실습4
    // <div>
    //   <Dessert />
    // </div>

    //실습5
    // <div>
    //   <Bank />
    // </div>

    //실습6
    <div>
      <Member />
    </div>


  );
}

export default App;
