import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // QueryClient와 Provider 추가
import TodoFetchingNode from './components/TodoFetchingNode'; // 컴포넌트 import
import UseMutationEx from './components/UseMutationEx';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    {/* <TodoFetchingNode /> */}
    {/* <UseMutationEx/> */}
    {/* <UsersFetching /> */}
    {/* <TodoComponent/> */}
    </QueryClientProvider>
  );
}

export default App;