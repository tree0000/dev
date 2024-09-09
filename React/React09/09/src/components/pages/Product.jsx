import { useNavigate } from "react-router-dom";
import products from '../productData'; // 제품 데이터 파일 임포트
import '../../App.css'; // CSS 파일 임포트

const Product = () => {
  const navigate = useNavigate();

  const clickHandler = (productId) => {
    navigate(`/product/${productId}`); // 클릭 시 해당 제품 상세 페이지로 이동
  };

  return (
    <div className="product-container">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="product-box" // 스타일 적용
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