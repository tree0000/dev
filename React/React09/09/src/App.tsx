import React from 'react';
import './App.css';
import Router1 from './components/Router1'; 
import { RouterProvider } from 'react-router-dom'; 

function App() {
  return (
    <div>
      <RouterProvider router={Router1} /> 
    </div>
  );
}

export default App;