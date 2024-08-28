import React from 'react';
import '../App.css';

// 비구조화 할당으로 props를 분해하여 사용
function FirstProps({ name, color, pizza, steak, price }) {
    return (
        <div>
            <h1>
                안녕하세요. 제 이름은 {name}입니다.
                <br/>
                제가 좋아하는 색은 {color}입니다.
            </h1>
            {pizza && <h3 className='pizza'>{pizza}</h3>} {/* pizza가 있을 때만 렌더링 */}
            {steak && <h3 className='steak'>{steak}</h3>} {/* steak가 있을 때만 렌더링 */}
            {price && <p className='price'>{price}</p>} {/* price가 있을 때만 렌더링 */}
        </div>
    );
}

export default FirstProps;
