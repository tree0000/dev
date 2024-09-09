// import { useParams } from "react-router-dom";

// const ProductInfo = () => {
//   const { productId } = useParams(); // URL에서 productId 추출하기

//   return (
//     <div>
//       <h2>{productId}번 제품 정보</h2>
//       <p>여기에 제품의 세부 정보를 표시할 수 있습니다.</p>

//     </div>
//   );
// };

// export default ProductInfo;

//강사님이 해주신 코드는 유지 관리가 어려움
// 제품상세 페이지를 이미지와 내용과 함께 관리하는것에서 유지 관리가쉽다.

// 방법:

// 	1.	새로운 컴포넌트 파일을 생성: 제품 상세 페이지에서 보여줄 정보를 관리하는 새로운 컴포넌트 파일을 생성합니다.
// 	2.	ProductInfo 컴포넌트에서 필요한 제품 정보를 가져오기: ProductInfo 컴포넌트에서 제품의 ID를 통해 해당 제품의 정보를 동적으로 불러오도록 구현합니다.
// 	3.	제품 데이터를 별도 파일로 관리: 제품 목록을 한 파일에서 관리하고, 해당 데이터를 ProductInfo에서 가져오는 방식으로 처리할 수 있습니다.

// 데이터 파일을 따로 저장하여 설정해야지 필요한 목록이 나올 수 있다. 약 데이터가 200000개 있다고 하면 좋은 코드가 아니다.
