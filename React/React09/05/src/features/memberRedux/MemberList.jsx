import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { delMember } from './memberSlice';

const MemberList = (props) => {
  const members = useSelector((state) => state.member.members)
  const dispatch = useDispatch();


    return (
        <div className='list-container'>
          <table>
            <thead>
                <tr>
                    <td>이름</td>
                    <td>나이</td>
                    <td>지역</td>
                    <td>삭제</td>
                </tr>
            </thead>
            <tbody>
            {members.map((member, index) => (
                <tr key={index}>
                <td>{member.name}</td>
                <td>{member.age}</td>
                <td>{member.region}</td>
                <td><button className='delBtn' onClick={() => dispatch(delMember(index))}>❌</button></td>
                </tr>
            ))}

            </tbody>
            </table>
        </div>
    );
};

export default MemberList;