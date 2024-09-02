import { useState } from "react";
import image from "./img/logo192.png";


//내부이미지 추가
const Img1 = () => {
    return (
        <div>
        <h1>src 폴더 내부 이미지 : import를 이용</h1>
        <img src={image} width="150px" alt="이미지" />
        <hr />

        <h1>src 폴더 내부 이미지 : require()를 이용</h1>
        <img src={require("./img/logo192.png")} width="150px" alt="이미지" />
        <hr />

        <h1>public 폴더 이미지</h1>
        <img src="./img/logo192.png" width="150px" alt="이미지" />
        <hr />

        <h1>외부 서버 이미지</h1>
        <img 
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="이미지"
        />
    </div>
    );
};


export default Img1;