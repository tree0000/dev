import React from 'react';
import { useQuery } from '@tanstack/react-query';
import PacmanLoader from 'react-spinners/PacmanLoader'; 

const fetchTodos = () => {
  return fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
};

const TodoTest = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  // 로딩 상태 처리
  if (isLoading) return <PacmanLoader color="#ff00c8" size={30} />

  // 에러 상태 처리
  if (error) return <div>Error: {error.message}</div>;

  // 데이터 없는 상태 처리
  if (!data) return <div>No data available</div>;

  // 데이터 리스트를 map으로 렌더링
  return (
    <>
      <h3>이번 주 할 일 리스트</h3>
      <ul>
        {data.map(todo => (
          <li key={todo.id}>
            <input type="checkbox" checked={todo.completed} readOnly />
            <span>{todo.title}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoTest;