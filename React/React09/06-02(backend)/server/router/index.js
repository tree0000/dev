const express = require('express');
const router = express.Router(); // Express 라우터 생성

// 기본 라우트
router.get('/', (req, res) => {
  res.send('Hello from the index route');
});

module.exports = router;