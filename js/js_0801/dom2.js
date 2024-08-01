// document.addEventListener("DOMContentLoaded", function () {
//   const elems = document.getElementsByClassName("fruit");
//   [...elems].forEach((elem) => {
//     elem.style.color = "red";
//   });

//   const apple = document.getElementsByClassName("fruit apple");
//   [...apple].forEach((elem) => {
//     elem.style.color = "blue";
//   });

//   const boxEls = document.querySelectorAll(".box");
//   boxEls.forEach(function (boxEl, index) {
//     boxEl.classList.add(`order-${index + 1}`);
//   });

//   //event
//   const div = document.getElementById("my_div");
//   const clearbtn = document.getElementById("clearbtn");
//   const result = document.getElementById("result");

//   div.addEventListener("click", (event) => {
//     result.innerHTML += "<div>click</div>";
//   });

//   div.addEventListener("mousedown", (event) => {
//     result.innerHTML += "<div>mousedown</div>";
//   });

//   div.addEventListener("mouseup", (event) => {
//     result.innerHTML += "<div>mouseup</div>";
//   });

//   clearbtn.addEventListener("click", (event) => {
//     result.innerHTML = "";
//   });
// });

// //이벤트 핸들러 : 어트리뷰트 방식 함수 참조가 아닌 함수 호출문

// function sayHi(name) {
//   console.log(`Hi${name}`);
// }

//이벤트 핸들러:프로퍼티 방식 이벤트타깃(객체),이벤트타입(종류) 이벤트 핸들러 지정

// const button = document.querySelector("button");
// button.onclick = function () {
//   console.log("button clicked 1");
// };
// button.addEventListener("click", function () {
//   console.log("button clicked 2");
// });

//이벤트 핸들러방식 + addEventListener

// button.addEventListener("click", function () {
//   console.log("button clicked 2");
// });

// const button = document.querySelector("button");
// const handleClick = () => console.log("button Click");

// button.addEventListener("click", handleClick);
// button.removeEventListener("click", handleClick);

//removeEventListener
// const button = document.querySelector("button");

// const handleClick = () => console.log("button click");

// button.onclick = handleClick;

// button.removeEventListener("click", handleClick);

// button.onclick = null;

// button.addEventListener("click", function add() {
//   console.log("click");
//   button.removeEventListener("click", add);
// });

//이벤트 객체를 인수로 전달 하기떄문에 전달받을러면 이벤트 헨들러객체를 전달 받을 매개변수를 명시적으로 해야함
// const mag = document.querySelector(".message");

// function showCoords(e) {
//   mag.textContent = `clientX:${e.clientX}, clientY:${e.clientY}`;
// }

// document.onclick = showCoords;

//이벤트 전파
//dom트리 상에 존재하는 이벤트
//

// const fruits = document.getElementById("fruits");
// function activate({ target }) {
//   [...fruits.children].forEach((fruit) => {
//     fruit.classList.toggle("active", fruit === target);
//   });
// }
// document.getElementById("apple").onclick = activate;
// document.getElementById("banana").onclick = activate;
// document.getElementById("cherry").onclick = activate;

// const fruits = document.getElementById("fruits");

// function activate({ target }) {
//   if (!target.matches("#fruits > li")) return;
//   [...fruits.children].forEach((fruit) => {
//     fruit.classList.toggle("active", fruit === target);
//   });
// }

// fruits.onclick = activate;

//할일
// document.addEventListener("DOMContentLoaded", () => {
//   const tasks = document.getElementById("color");

//   tasks.addEventListener("click", (event) => {
//     if (event.target.classList.contains("check")) {
//       event.target.classList.toggle("active");
//     }
//   });
// });

//강사님(할일)
// const buttons = document.querySelector(".check");
// buttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     button.classList.toggle("active");
//   });
// });

// const box = document.querySelector(".box");
// const initialMousePos = { x: 0, y: 0 };
// const offset = { x: 0, y: 0 };

// // const move = (e) => {

// // };

// document.addEventListener("click", e => {
//   initialMousePos.x = e.clientX - offset.x;
//   initialMousePos.y = e.clientY - offset.y;
//   offset.x = e.clientX - initialMousePos.x;
//   offset.y = e.clientY - initialMousePos.y;
//   box.style.transform = `translate3d(${offset.x},${offset.y}px,0)`;
//   document.addEventListener("mousemove", move);
// });

// document.addEventListener("mouseup", () => {
//   document.removeEventListener("mousemove", move);
// });

//form 프로퍼티는 모든 from 요소들을 저장한 HTML컬렉션 반환
//