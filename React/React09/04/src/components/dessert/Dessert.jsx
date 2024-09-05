import React, { useReducer, useState } from 'react';
import reducer from './dessertReducer';
import './dessert.scss'

const Dessert = () => {
    // const [total, dispatch] = useReducer(reducer, 0);
    // //total : 값을 저장할 공간.초기값 0
    // //dispatch : 값을 변경할 함수
    // //reducer : 새로운 상태 값 반환 함수

    //주문목록까지 나오도록
    const [orders, dispatch] = useReducer(reducer, [])
    const total = orders.reduce((sum, order) => sum + order.price, 0);


    return (
        <div className='dessert-container'>
            <h1>🍥디저트 가게🍥</h1>
            <button onClick={() => dispatch({type: '빙수', price: 8000})}>🍧</button>
            <button onClick={() => dispatch({type: '당고', price: 5000})}>🍡</button>
            <button onClick={() => dispatch({type: '케이크', price: 6000})}>🍰</button>
            <button onClick={() => dispatch({type: '푸딩', price: 3000})}>🍮</button>

            <h2>주문 목록</h2>
            <ul>
                {orders.map((order, index) => (
                    <li key={index}>
                        {order.name} - {order.price}원
                    </li>
                ))}
            </ul>
            <h3>금액 {total}원</h3>

        </div>
    );
};

export default Dessert;