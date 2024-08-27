const express = require('express');
const path = require('path');
const app = express();

// 정적 파일을 서빙할 디렉토리 설정
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/main.html'));
});

const PORT = 8001;
app.listen(PORT, () => {
    console.log(`localhost:${PORT}에서 실행`);
});
