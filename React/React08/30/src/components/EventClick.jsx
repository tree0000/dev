import React, { useState } from "react";

const EventClick = () => {
    const [fontSize, setFontSize] = useState(20); // 초기 글자 크기 설정

    const changeFontSize = () => {
        setFontSize((prevSize) => prevSize + 10); // 글자 크기 증가
    };

    return (
        <div>
            <div style={{ fontSize: `${fontSize}px` }}>안녕하세요</div>
            <button onClick={changeFontSize}>글자크기변경</button>
        </div>
    );
};

export default EventClick;
