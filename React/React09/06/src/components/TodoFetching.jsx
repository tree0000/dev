import React from 'react';
import { useQuery } from '@tanstack/react-query'; 
import PacmanLoader from 'react-spinners/PacmanLoader'; 


const fetchTodo = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
};

const TodoFetching = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodo,
  });
//로딩상태 처리
  if (isLoading) return <PacmanLoader color="#ff00c8" size={30} />
//   <div className="spinner-container"> </div>;
  
//에러상태 처리
  if (error) return <div>error: {error.message}</div>;

//테이터상태 처리
  if (!data) return <div>No data available</div>;


  return (
    <>
      <h3>Todo: {data.title}</h3>
      <p>Status: {data.completed ? "Completed" : "Not completed"}</p>
    </>
  );
};

export default TodoFetching;