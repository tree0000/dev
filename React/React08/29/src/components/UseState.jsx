import React, { useState } from "react";

const ChangeProps = (props) => {
    const [name, setName] = useState(props.name); 

    function changeName() {
        setName('react'); 
        console.log(name);
    }

    return (
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>클릭</button>
        </div>
    );
}

export default ChangeProps;
