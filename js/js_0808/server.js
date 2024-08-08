const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const cors = require("cors");

// app.use(bodyParser());
app.use(express.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(expressLayouts);
app.use(express.static("public"));

const user2 = [
  { name: "kim", age: 17, role: "front" },
  { name: "lee", age: 25, role: "back" },
  { name: "park", age: 30, role: "full" },
  { name: "chai", age: 16, role: "front" },
];

// POST 요청에서 req.body를 파싱하기 위한 미들웨어 추가
app.use(express.json());

let tasks = [];
app.get("/", (req, res) => {
  const data = { message: "Hello" };
  res.render("index", {
    data,
    user2,
    people: [{ name: "kim" }, { name: "lee" }, { name: "park" }],
    tasks,
  });
});

app.post("/addTask", (req, res) => {
  const { newTask } = req.body;
  if (newTask) {
    tasks.push(newTask);
  }
  res.redirect("/");
});

app.post("/deleteTask", (req, res) => {
  const { task } = req.body;
  tasks = tasks.filter((t) => t !== task);
  res.redirect("/");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.render("result", { name, email });
});

// 포트 설정 및 오류 처리
const PORT = process.env.PORT || 8000;

app
  .listen(PORT, () => {
    console.log(`서버연결확인 http://localhost:${PORT}`);
  })
  .on("error", (err) => {
    if (err.code === "EADDRINUSE") {
      console.error(`Port ${PORT} is already in use.`);
    } else {
      console.error(err);
    }
  });
