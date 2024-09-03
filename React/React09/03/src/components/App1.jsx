import { useRef, useState } from "react";

function App(){
    const style ={
        
    }

    const [name,setName] = useState();
    const [age,setAge] = useState();

    const nameRef = useRef();
    const ageRef = useRef();

    return(
        <div style={style}>
        <h1>input 태그 value 값 지정</h1>
        이름: <input type="text" value="" onChange={(e)=>setName(nameRef.current.value)}/>
        나이: <input type="number" value=""onChange={(e)=>setName(ageRef.current.value)}/>
        </div>
    )

}

export default App;

