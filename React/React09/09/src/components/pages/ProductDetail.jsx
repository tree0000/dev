import { useParams } from "react-router-dom";
import products from '../productData'; //데이터 가지고오기

const ProductDetail = () => {
  const { productId } = useParams(); 
  const product = products.find((p) => p.id === parseInt(productId)); // 제품 ID가지고오기

  if (!product) {
    return <h2>제품을 찾을 수 없습니다.</h2>; 
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>{product.description}</p>
    </div>
  );
}

export default ProductDetail;