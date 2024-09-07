const express = require("express");
const cors = require("cors");

const app = express();
const port = 8001;

// body-parser는 최신 express에서 기본적으로 제공되므로, 별도 설치 없이 express.json()을 사용
app.use(express.json());
app.use(cors()); // CORS 허용

// 라우터 설정
const index = require("./router/index"); // index.js 라우터 모듈 가져오기
app.use("/", index); // "/" 경로에 라우터 연결

// POST 요청을 받아 새로운 할 일 추가
let todoList = []; 

app.post('/api/add', (req, res) => {
  const newItem = {
    id: todoList.length + 1,
    text: req.body.text,
    status: false,
  };
  todoList.push(newItem);
  res.send(newItem);
});

// 서버 실행
app.listen(port, () => {
  console.log(`서버 실행 완료: http://localhost:${port}`);
});