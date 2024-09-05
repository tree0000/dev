import React, { useReducer } from 'react';
import MemberAdd from './MemberAdd'
import MemberList from './MemberList'
import './member.scss'
import { useDispatch, useSelector } from 'react-redux';

const Member = () => {

    return (
        <div>
            <MemberAdd  />
            <MemberList  />
        </div>
    );
};

export default Member;