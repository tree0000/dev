import React, { useState } from "react";

const Submit = () => {
  function submitHandler(e) {
    e.preventDefault();
    console.log("submit 이벤트 발생");
  }

  return (
    <div>
      <h1>Submit 이벤트</h1>
      <form onSubmit={submitHandler}>
        <input type="submit" value="확인" />
      </form>
    </div>
  );
};

export default Submit;