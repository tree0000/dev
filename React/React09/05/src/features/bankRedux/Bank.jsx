import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw } from "./bankSlice";
import './bank.scss'

const Bank = () => {

  const total = useSelector((state) => state.bank.value)
  const dispatch = useDispatch();
  const money = useRef(0)
  return (
    <div>
      <div className="bank-container">
        <h1>🤵🏻‍♀️금액을 입력하세요.</h1>
        <input
          type="number"
          step="1000"
          ref={money}
        />
        <h1>🤵🏻‍♀️입금 또는 출금 버튼을 클릭하세요.</h1>
        <button onClick={() => dispatch(deposit(parseInt(money.current.value)))}>
          입금
        </button>
        <button onClick={() => dispatch(withdraw(parseInt(money.current.value)))}>
          출금
        </button>
        <h1>💰현재 잔액 : {total}</h1>
      </div>
    </div>
  );
};

export default Bank;
