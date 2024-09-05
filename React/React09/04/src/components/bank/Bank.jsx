import React, { useReducer, useState } from 'react';
import reducer from './bankReducer';
import { useRef } from 'react';
import './bank.scss'

const Bank = () => {
    const [total, dispatch] = useReducer(reducer, 0)
    // const money = useRef(0)

    // 강사님 코드
    const [money, setMoney] = useState(0)

    return (
        // <div className='bank-container'> 
        //     <h1>🤵🏻‍♀️금액을 입력하세요.</h1>
        //     <input type="number" step="1000" ref={money}/>
        //     <h1>🤵🏻‍♀️입금 또는 출금 버튼을 클릭하세요.</h1>
        //     <button onClick={() => dispatch({type:'deposit', money : parseInt(money.current.value)})}>입금</button>
        //     <button onClick={() => dispatch({type:'withdraw', money : parseInt(money.current.value)})}>출금</button>
        //     <h1>💰현재 잔액 : {total}</h1>
        // </div>

        <div className='bank-container'> 
            <h1>🤵🏻‍♀️금액을 입력하세요.</h1>
            <input type="number" step="1000" value={money} onChange={(e) => {setMoney(parseInt(e.target.value))}}/>
            <h1>🤵🏻‍♀️입금 또는 출금 버튼을 클릭하세요.</h1>
            <button onClick={() => dispatch({type:'deposit', money : money})}>입금</button>
            <button onClick={() => dispatch({type:'withdraw', money : money})}>출금</button>
            <h1>💰현재 잔액 : {total}</h1>
        </div>


    );
};

export default Bank;