import logo from './logo.svg';
import './App.css';
// import StyledComponent from './components/StyledComponent';
// import Button1 from './components/Button1'
// import Test from './components/Test1';
// import NestingComponent from './components/NestingComponent';
import ParentSelector from './components/Test2';


function App() {
  return (
    <div>
      {/* <Test /> Self-closing tag */}
      <ParentSelector/>
    </div>
  );
}

export default App;