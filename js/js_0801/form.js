// const x = document.forms[0].id;
// console.log(x);
// document.getElementById("show").innerHTML = x;
// function getInput() {
//   const x = document.forms["form1"];
//   let text = "";
//   for (let i = 0; i < x.length; i++) {
//     text += x.elements[i].value + "<br>";
//   }
//   document.getElementById("show").innerHTML = text;
// }

// function myFunction() {
//   let id = document.getElementById("id").value;
//   let password = document.getElementById("password").value;
//   let message = "";

//   if (id.length < 1) {
//     message += "아이디를 입력하세요<br>";
//   } else if (id.length > 10) {
//     message += "아이디는 10자리 이하로 입력하세요<br>";
//   } else {
//     message += "아이디 입력 굳<br>";
//   }

//   if (password.length < 1) {
//     message += "비밀번호를 입력하세요<br>";
//   } else if (password.length > 10) {
//     message += "비밀번호는 10자리 이하로 입력하세요<br>";
//   } else {
//     message += "비밀번호 입력 굳<br>";
//   }

//   document.getElementById("show").innerHTML = message;

//   ["id", "password"].forEach(
//     (field) => (document.getElementById(field).value = "")
//   );
//   setTimeout(() => {
//     document.getElementById("show").innerHTML = "";
//   }, 1000);
// }

const x = document.getElementById("name");
x.onfocus = function () {
  changeBgcolorFo();
};
x.onblur = function () {
  changeBgcolorBl();
};

function changeBgcolorFo() {
  x.style.backgroundColor = "pink";
}
function changeBgcolorBl() {
  x.style.backgroundColor = "gray";
}

const keyInput = document.getElementById("keyInput");
// let text = "";
// keyInput.addEventListener("keydown", showKey);
// function showKey(e) {
//   text += e.Key;
//   document.getElementById("show").innerHTML = text;
// }
keyInput.addEventListener("keyup");
function changeUpper() {
  keyInput.value = keyInput.value.toUpperCase();
}
//셀렉트
const selectFruits = document.getElementById("selectFru")
selectFruits.addEventListener('change',(e)=>{
  document.getElementById("show").innerHTML ="내가 좋아하는 과일"+ e.target.value + "입니다"
})