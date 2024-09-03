import { log } from "console";
import React, { useRef, useState } from "react";

const UseRefComponent3 = () => {
    const [refresh, setRefresh] = useState(0);
    const countRef = useRef(0);
    let currentVar = 0;

    function refreshHandler() {
        setRefresh(refresh + 1);
    }

    function addRefHandler() {
        countRef.current = countRef.current + 1;
        console.log("ref : ", countRef.current);
    }

    function addVarHandler() {
        currentVar = currentVar + 1;
        console.log("var : ", currentVar);
    }

    return (
        <div>
            <p>State 값: {refresh}</p>
            <p>Ref 값: {countRef.current}</p>
            <button onClick={refreshHandler}>State</button>
            <button onClick={addRefHandler}>Ref</button>
        </div>
    );
};

//강사님 
// const Prac03 = ()=>{
//     const[refresh, setRefresh] = useState(0);
//     const currentVar = 0;
// }

// function addRefHandler(){
//     countRef.current = countRef.current +1
//     console.log("ref:",countRef.current)
// }
//  function addVarHandler(){
//     currentVar = currentVar +1;
//     console.log("var:", currentVar);
//  }

//  function refreshHandler() {
//     setRefresh(refresh +1);
//  }




export default UseRefComponent3;