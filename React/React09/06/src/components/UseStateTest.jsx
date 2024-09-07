import React, { useEffect, useState } from 'react';

const TodoComponent = () => {
  const [todo, setTodo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchTodo = async () => {
      setIsLoading(true); 
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setTodo(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchTodo();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
    <h1>Todo Item</h1>
    <p>ID: {todo.id}</p>
    <p>Title: {todo.title}</p>
    <p>Completed: {todo.completed ? "Yes" : "No"}</p>
    </div>
  );
};

export default TodoComponent;