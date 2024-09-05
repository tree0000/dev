import React, { useState } from "react";
import { useReducer } from "react";
import UserList from "./UserList";
import "./AddUser.scss";

const reducer = (state, action) => {
  switch (action.type) {
    case "addMember":
      return {
        count: state.count + 1,
        member: [...state.member, action.newUser],
      };
    case "deleteMember":
      return {
        count: state.count - 1,
        member: state.member.filter((user) => user.name !== action.username),
      };
    default:
      return state;
  }
};

/*
// 초기값 형태
initialState = { 
  count : 0,
  member : [
    {
      name : "",
      age : "",
      address : "",
    }
  ]
}
*/

const AddUser = () => {
  const initialState = {
    count: 0,
    member: [],
  };

  const [userList, dispatch] = useReducer(reducer, initialState);
  const [newUser, setNewUser] = useState({});

  function changeHandler(e) {
    setNewUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <>
      <div className="container">
        <h1>전체 회원 수 : {userList.count}</h1>
        <label>
          이름 : <input type="text" name="name" onChange={changeHandler} />
        </label>
        <label>
          나이 : <input type="number" name="age" onChange={changeHandler} />
        </label>
        <label>
          지역 : <input type="text" name="address" onChange={changeHandler} />
        </label>
        <button
          className="addBtn"
          onClick={() => {
            dispatch({ type: "addMember", newUser: newUser });
          }}
        >
          추가
        </button>
      </div>

      <UserList userList={userList.member} dispatch={dispatch} />
    </>
  );
};

export default AddUser;
