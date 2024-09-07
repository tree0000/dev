import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { ClipLoader } from 'react-spinners';

const fetchTodoList = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
  .then(
    (response) => response.json()
  )
}

const TodoListFetching = () => {

  const {data, error, isLoading} = useQuery({
    queryKey : ['todoList'],
    queryFn : fetchTodoList,
  })


  if(isLoading) return <div className='spinner-container'><ClipLoader color="#ff00c8" size={30} /></div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  const styles= {
    margin : "10px"
  }

  return (
    <div>
      <h1>이번 주 할 일 리스트</h1>
      {data.map((todo) => (
        <div key={todo.id} style={styles}>
        <label >
          <input type="checkbox" checked={todo.completed}/>
          {todo.title}
          </label>
          <br/>
          </div>
      ))}
    </div>
  );
};

export default TodoListFetching;