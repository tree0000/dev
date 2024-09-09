import { createBrowserRouter } from "react-router-dom";
import Root from './Root'; 
import Home from './pages/Home';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail'; // 새로 만든 ProductDetail 컴포넌트
import NotFound from './pages/NotFound';
import React from "react";

// 라우터 설정
const Router1 = createBrowserRouter([
  {
    path: "/", 
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: "product", 
        element: <Product />
      },
      {
        path: "product/:productId", 
        element: <ProductDetail /> 
      }
    ]
  }
]);

export default Router1;