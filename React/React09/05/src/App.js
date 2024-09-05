import logo from './logo.svg';
import './App.css';
import {createContext, useContext, useState} from 'react'
import {MyContext} from './components/context'
import ChildComponent from './components/ChildComponent';
import { ThemeContext } from './components/themePractice/themeContext';
import HomeComponent from './components/themePractice/HomeComponent'
import ColorProvider from './components/colorPractice/ColorProvider';
import Counter from './features/counter/Counter';
import Dessert from './features/dessertRedux/Dessert';
import Bank from './features/bankRedux/Bank';
import Member from './features/memberRedux/Member';

//실습1
// function App() {
//   return <GrandParent value="Hello World" /> 
// }

// function GrandParent({value}) {
//   return <Parent value={value} />
// }

// function Parent({value}) {
//   return <Child value={value} />
// }

// function Child({value}) {
//   return <Message value={value} />
// }

// function Message({value}) {
//   return <div> 전달받은 데이터 : {value}</div> 
// }

//실습2

// const MyContext = createContext(); //별도 파일 만들지 않고 여기에다 만들 경우
// function App() {
//   return (
//     <MyContext.Provider value="Hello World!">
//     <GrandParent /> 
//     </MyContext.Provider>
//   );
// }

// function GrandParent() {
//   return <Parent />
// }

// function Parent() {
//   return <Child />
// }

// function Child() {
//   return <Message />
// }

// function Message() {
//   const value = useContext(MyContext);
//   return <div> 전달받은 데이터 : {value}</div> 
// }

function App() {
  //실습4
  const [darkMode, setDarkMode] = useState(false);
  return (

    //실습3
    // <MyContext.Provider value="Hello World">
    //   <ChildComponent />
    // </MyContext.Provider>

    //실습4
    // <ThemeContext.Provider value={{darkMode, setDarkMode}}>
    //   <HomeComponent />
    // </ThemeContext.Provider>

    //문제1
    // <ColorProvider />

    //redux 실습
    // <>
    //   <Counter />
    // </>

    //dessert -> redux 실습
    // <>
    // <Dessert />
    // </>

    //bank -> redux 실습
    // <>
    // <Bank />
    // </>

    //member -> redux 실습
    <>
    <Member />
    </>
  );
}


export default App;
