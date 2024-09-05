import React, { useState } from 'react';

const MemberAdd = (props) => {
    
    const {member, addMember} = props

    function sendMember(e) {
        e.preventDefault();
        const newMember = [
            e.target.username.value,
            e.target.age.value,
            e.target.region.value
        ]   

        addMember(newMember)
    }

    return (
        
        <div className='add-container'>
            <h1>전체 회원 수 : {member}</h1>
            <form onSubmit={sendMember}>
                <label>이름 : <input type="text" name="username"/></label>
                <label>나이 : <input type="text" name="age"/></label>
                <label>지역 : <input type="text" name="region"/></label>
                <input className="btn" type="submit" value="추가" />
            </form>
        </div>
    );
};

export default MemberAdd;