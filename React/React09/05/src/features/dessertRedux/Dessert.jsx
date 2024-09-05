import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderDessert } from './dessertSlice';
import './dessert.scss'

const Dessert = () => {
  const dispatch = useDispatch(); 
  const orders = useSelector((state) => state.dessert.orders)
  const total = orders.reduce((sum, order) => sum + order.price, 0);

  return (

    <div className='dessert-container'>
            <h1>🍥디저트 가게🍥</h1>
            <button onClick={() => dispatch(orderDessert({ name: '빙수', price: 8000 }))}>🍧</button>
            <button onClick={() => dispatch(orderDessert({name: '당고', price: 5000}))}>🍡</button>
            <button onClick={() => dispatch(orderDessert({name: '케이크', price: 6000}))}>🍰</button>
            <button onClick={() => dispatch(orderDessert({name: '푸딩', price: 3000}))}>🍮</button>

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