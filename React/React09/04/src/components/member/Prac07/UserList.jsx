import React from "react";
import "./UserList.scss";

const UserList = (props) => {
  const { userList, dispatch } = props;

  return (
    <div className="wrapper">
      <table className="userInfo">
        <thead>
          <tr className="userInfo-thead-tr">
            <td>이름</td>
            <td>나이</td>
            <td>지역</td>
            <td>삭제</td>
          </tr>
        </thead>
        <tbody>
          {userList.map((user, idx) => (
            <tr key={idx} className="userInfo-tbody-tr">
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.address}</td>
              <td>
                <button
                  className="deleteBtn"
                  onClick={() =>
                    dispatch({ type: "deleteMember", username: user.name })
                  }
                >
                  ❌
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
