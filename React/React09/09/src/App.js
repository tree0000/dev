// App.js
import './App.css';
import Router1 from './components/Router1'; // Router1 임포트
import { RouterProvider } from 'react-router-dom'; // RouterProvider 임포트

function App() {
  return (
    <div>
      <RouterProvider router={Router1} /> {/* Router1을 RouterProvider에 전달 */}
    </div>
  );
}

export default App;