import React, { useReducer } from 'react';
import MemberAdd from './MemberAdd'
import MemberList from './MemberList'
import reducer from './memberReducer';
import './member.scss'

const Member = () => {
    const [members, dispatch] = useReducer(reducer, [])
    const memberNum = members.length
    function addMember(member) {
        dispatch({type: 'ADD', name : member[0], age : member[1], region : member[2]})
    }

    function deleteMember(index) {
        dispatch({ type: 'DELETE', index});
    }

    return (
        <div>
            <MemberAdd member={memberNum} addMember={addMember}/>
            <MemberList members={members} deleteMember={deleteMember}/>
        </div>
    );
};

export default Member;