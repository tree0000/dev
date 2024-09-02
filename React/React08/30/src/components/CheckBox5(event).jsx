import React, { useState } from "react";
const Countimg =() => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const totalCount = count1 + count2;

    const CountBox1 = () =>{
        setCount1(count1 +1);
    }

    const CountBox2 = () =>{
        setCount2(count2 +1);
    }
    return (
        <div style={{ textAlign: 'center' }}>
        <h1>Total Count : {totalCount}</h1>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <div style={{ padding: '20px', backgroundColor: '#add8e6', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>

                <h2>{count1}</h2>
                <button onClick={CountBox1} style={{ padding: '10px', backgroundColor: '#ff7f7f', border: 'none', borderRadius: '5px' }}>클릭</button>
            </div>

            <div style={{ padding: '20px', backgroundColor: '#add8e6', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}>

                <h2>{count2}</h2>
                <button onClick={CountBox2} style={{ padding: '10px', backgroundColor: '#ff7f7f', border: 'none', borderRadius: '5px' }}>클릭</button>
            </div>
        </div>
    </div>
    );
}


export default Countimg;