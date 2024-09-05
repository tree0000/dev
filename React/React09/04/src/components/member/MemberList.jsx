import React from 'react';

const MemberList = (props) => {
    const {members, deleteMember } = props



    return (
        <div className='list-container'>
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
                <td><button className='delBtn' onClick={() => deleteMember(index)}>❌</button></td>
                </tr>
            ))}

            </tbody>

        </div>
    );
};

export default MemberList;