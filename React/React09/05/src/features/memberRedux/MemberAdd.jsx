import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMember } from "./memberSlice";

const MemberAdd = () => {

  const members = useSelector((state) => state.member.members)
  const memberNum = members.length
  const dispatch = useDispatch();

  function sendMember(e) {
    e.preventDefault();
    dispatch(
      addMember({
        name: e.target.username.value,
        age: e.target.age.value,
        region: e.target.region.value,
      })
    );
  }

  return (
    <div className="add-container">
      <h1>전체 회원 수 : {memberNum}</h1>
      <form onSubmit={sendMember}>
        <label>
          이름 : <input type="text" name="username" />
        </label>
        <label>
          나이 : <input type="text" name="age" />
        </label>
        <label>
          지역 : <input type="text" name="region" />
        </label>
        <input className="btn" type="submit" value="추가" />
      </form>
    </div>
  );
};

export default MemberAdd;
