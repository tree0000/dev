import { useState, useMemo } from "react";

function MyComponent() {

    const [hardNumber,setHardNumber] = useState(1);
    const [easyNumber,setSasyNumber] = useState(1);

    const hardSum = useMemo(()=>hardCalculator(hardNumber),[hardCalculator]);
    const easySum = easyCalculator(easyNumber);

    function hardCalculator(number){
        for(let i =0; i < 1000; i++){
            console.log(i);
        }
        return number + 10000;
    }

    function easyCalculator(number){
        console.log("쉬운계산");
        return number +1;
        
    }


    return(
        <div>
            <h3>어려운 계산기</h3>
            <input
            type="number"
            value={hardNumber}
            onChange={(e) => setHardNumber(parseInt(e.target.value))}
            />
            
            <h3>쉬운 계산기</h3>
            <input
            type="number"
            value={easyNumber}
            onChange={(e) => setSasyNumber(parseInt(e.target.value))}
            />
            <span> +10000 = {hardSum}</span>
        </div>
    )






}
export default MyComponent;