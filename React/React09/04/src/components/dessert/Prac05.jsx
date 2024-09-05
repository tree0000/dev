import React from "react";
import { useReducer } from "react";

const reducer = (state, action) => {
  console.log("어서오세요");

  switch (action.type) {
    case "햄버거":
      return state + action.price;
    case "감자튀김":
      return state + action.price;
    case "콜라":
      return state + action.price;
    default:
      return state;
  }
};

const Prac05 = () => {
  const [total, dispatch] = useReducer(reducer, 0);

  const container = {
    textAlign: "center",
  };

  const btnStyle = {
    background: "none",
    border: "1px solid gray",
    padding: "20px",
    fontSize: "30px",
  };

  return (
    <div style={container}>
      <h3>🎀새싹 햄버거 가게🎀</h3>
      <h3>지불할 금액 : {total}원</h3>
      <button
        style={btnStyle}
        onClick={() => dispatch({ type: "햄버거", price: 5000 })}
      >
        🍔
      </button>

      <button
        style={btnStyle}
        onClick={() => dispatch({ type: "감자튀김", price: 2000 })}
      >
        🍟
      </button>

      <button
        style={btnStyle}
        onClick={() => dispatch({ type: "콜라", price: 1000 })}
      >
        🥤
      </button>
    </div>
  );
};

export default Prac05;
