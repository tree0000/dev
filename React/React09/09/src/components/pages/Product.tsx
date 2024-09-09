import { useNavigate } from "react-router-dom";
import products from '../productData'; 
import '../../App.css'; 
import React from "react";

// 제품의 타입
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const Product = () => {
  const navigate = useNavigate();

  // 제품 상세 페이지 헨들러
  const clickHandler = (productId: number) => {
    navigate(`/product/${productId}`); //이동 navigate
  };

  return (
    <div className="product-container">
      {products.map((product: Product) => (
        <div 
          key={product.id} 
          className="product-box"
          onClick={() => clickHandler(product.id)}
        >
          <img src={product.image} alt={product.title} className="product-image" />
          <span>{product.title}</span>
          <span className="product-price"> ${product.price}</span>
        </div>
      ))}
    </div>
  );
}

export default Product;