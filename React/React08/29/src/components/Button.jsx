// import {useState} from "react";

const button = (props) => {
    let name = props.name;

    function changeName() {
    name = 'react';
    console.log(name);
    }
    return(
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>클릭</button>
        </div>
    )
}

export default button;