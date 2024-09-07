import React from 'react';
import TodoComponent from './components/UseStateTest'; // 중괄호 없이 기본 가져오기
import TodoFetching from './components/TodoFetching';
import TodoTest from './components/TodoTest';
import TodoUser from './components/TodoUser';
function App() {
  return (
    <div>
      <TodoTest />
      <TodoUser/>
    </div>
  );
}

export default App;

