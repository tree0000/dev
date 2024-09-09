import { useParams } from "react-router-dom";
import products, { Product } from '../productData'; // 제품 데이터와 타입 임포트
import React from "react";

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>(); // productId는 string으로 받을 것

  // 제품 ID를 찾기 전에 타입 변환 필요 여기서 막힘
  const product = products.find((p: Product) => p.id === parseInt(productId || '0'));

  if (!product) {
    return <h2>제품을 찾을 수 없습니다.</h2>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetail;