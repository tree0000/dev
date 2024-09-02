import React,{useState} from "react";


const EventClick2 = () => {


    const [color, setColor] = useState('black');

    return (
        <div>
            <h1 style={{ color }}>글자색 바꾸기</h1>
            <button style={{ color: 'red' }} onClick={() => setColor('red')}>빨강</button>
            <button style={{ color: 'green' }} onClick={() => setColor('green')}>초록</button>
            <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>파랑</button>
        </div>
    );
};

export default EventClick2;