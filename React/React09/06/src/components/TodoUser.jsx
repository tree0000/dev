import React from 'react';
import { useQuery } from '@tanstack/react-query';
import PacmanLoader from 'react-spinners/PacmanLoader'; 

const fetchUsers = () => {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    });
};

const UserList = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
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
      <h3>사용자 정보</h3>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default UserList;