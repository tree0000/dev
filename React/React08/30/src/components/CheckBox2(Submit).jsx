import React, { useState } from "react";

function RadioButton() {
    const [items, setItems] = useState([
        { id: 1, name: '서울' },
        { id: 2, name: '부산' },
        { id: 3, name: '제주' },
    ]);

    const [selectedItem, setSelectedItem] = useState("");

    const handleChange = (e) => {
        setSelectedItem(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`선택: ${selectedItem}`);
    };

    return (
        <div>
            <h1>라디오 버튼의 value를 출력</h1>
            <form onSubmit={handleSubmit}>
                {items.map(item => (
                    <div key={item.id}>
                        <input
                            type="radio"
                            name="location"
                            value={item.name}
                            onChange={handleChange}
                        />
                        {item.name}
                    </div>
                ))}
                <button type="submit">확인</button>
            </form>
        </div>
    );
}

//강사님 코드
//나의 코드와 개념이 같음

export default RadioButton;