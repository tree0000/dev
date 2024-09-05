import React from "react";
import { useState } from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "deposit":
      return state + action.number;
    case "withdraw":
      return state - action.number;
    default:
      return state;
  }
};

const Prac06 = () => {
  const [amount, dispatch] = useReducer(reducer, 0);
  const [money, setMoney] = useState(0);

  const container = {
    textAlign: "center",
  };

  const btnStyle1 = {
    background: "greenyellow",
    border: "none",
    margin: "10px",
    padding: "20px",
    fontSize: "20px",
  };

  const btnStyle2 = {
    background: "orange",
    border: "none",
    margin: "10px",
    padding: "20px",
    fontSize: "20px",
  };

  return (
    <div style={container}>
      <h3>🙎‍♀️금액을 입력하세요.</h3>
      <input
        type="number"
        step="1000"
        value={money}
        onChange={(e) => setMoney(parseInt(e.target.value))}
      />
      <h3>🙎‍♀️입금 또는 출금 버튼을 클릭하세요.</h3>
      <button
        style={btnStyle1}
        onClick={() => dispatch({ type: "deposit", number: money })}
      >
        입금
      </button>
      <button
        style={btnStyle2}
        onClick={() => dispatch({ type: "withdraw", number: money })}
      >
        출금
      </button>
      <h3>💰현재 잔액 : {amount}</h3>
    </div>
  );
};

export default Prac06;
