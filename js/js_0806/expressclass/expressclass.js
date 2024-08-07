const express = require("express");
const path = require("path"),
  async = require("async"),
  fs = require("fs");
const app = express();
const PORT = 5000;

const users = [
  { name: "kim", email: " kim@gmail.com" },
  { name: "lee", email: " lee@gmail.com" },
  { name: "park", email: " park@gmail.com" },
];

app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "public", "index.html"));
});

// app.get("/post", (req, res) => {
//   res.send("포스트페이지");
// });
// app.get("/shop", (req, res) => {
//   res.send("쇼핑");
// });

// app.get("/greet", (req, res) => {
//   res.send(JSON.stringify({ message: "안녕하세요" }));
// });

app.get("/users", (req, res) => {
  res.json(users);
});
app.listen(PORT, () => {
  console.log(`서버실행 http://localhost:${PORT}`);
});
