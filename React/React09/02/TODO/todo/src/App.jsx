import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import './App.css';
import { useState } from "react";

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "할일하기",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "mini프로젝트하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Testcode 작성하기",
    date: new Date().getTime(),
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);

  const onCreate = (content) => {
    const newTodo = {
      id: todos.length > 0 ? todos[0].id + 1 : 0,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    };
    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;