import React, { useState } from "react";

function CheckBox1() {
    const [items, setItems] = useState([
        { id: 1, name: '모자', price: 10000, },
        { id: 2, name: '신발', price: 30000, },
        { id: 3, name: '가방', price: 80000, },
    ]);

    const CheckChage = (id) => {
        const uplistItems = items.map(item => 
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setItems(uplistItems);
    };
    
    const total = items
        .filter(item => item.checked)
        .reduce((acc, item) => acc + item.price, 0);

    return (
        <div>
            {items.map(item => (
                <div key={item.id}>
                    <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => CheckChage(item.id)}
                    />
                    {item.name} {item.price.toLocaleString()}원
                </div>
            ))}
            <hr />
            <div>합계: {total.toLocaleString()}원</div>
        </div>
    );
}

//강사님 풀이
// const [total, setTotal] = useState(0);

// function changeHandler(checkbox) {
//     // checkbox = <input type="checkbox" value="10000" checked/>
//     // 체크 되었는지, 안되었는지..
//     if (checkbox.checked) {
//         // 체크 된 상태
//         // total = total + checkbox.value

//         // 0 + "10000" = 010000
//         // setTotal(total + parseInt(checkbox.value)) // 0 -> 10000

//         // 리액트 스타일
//         setTotal((prevState) => prevState + parseInt(checkbox.value));
//     } else {
//         // 체크 안 된 상태
//         // setTotal(total - parseInt(checkbox.value))

//         // 리액트 스타일
//         setTotal((prevState) => prevState - parseInt(checkbox.value));
//     }
// }


export default CheckBox1;
