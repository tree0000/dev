import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { PacmanLoader } from 'react-spinners';

const fetchTodo = () => {
  return fetch("httsps://jsonplaceholder.typicode.com/todos/1")
  .then(
  (response) => response.json()
  );
  }

const TodoFetching = () => {

  const {data, error, isLoading} = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodo,
  })

  // 로딩 상태 처리
  // if (isLoading) return <div className='spinner-container'><div className='spinner'>Loading...</div></div>;
  if(isLoading) return <div className='spinner-container'><PacmanLoader color="#ff00c8" size={30} /></div>
  // 에러 상태 처리
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div>
      <h3>Todo: {data.title}</h3>
      <p>Status: {data.completed ? "Completed" : "Not completed"}</p>
    </div>
  );
};

export default TodoFetching;