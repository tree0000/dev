// let userId = document.querySelector("#userid");
// let password = document.querySelector("#password");
// let check_password = document.querySelector("#check-password");

// userId.onchange = checkId;

// function checkID() {
//   if (userId.ariaValueMax.length < 4 || userId.value.length > 15) {
//     alert("4~15자리의 영문과 숫자로 입력");
//     userId.ariaSelected();
//   }
// }

// function checkPW() {
//   if (password.value.length < 8) {
//     alert("4~15자리의 영문과 숫자로 입력");
//     password.value = "";
//     password.focus();
//   }
// }
// function comparPw(){
//     if(password.value != password.value){
//         alert("암호가 다릅니다.")
//         password.focus();
//         password.value = "";
//     }
// }

document.addEventListener("DOMContentLoaded", () => {
  let userId = document.querySelector("#userid");
  let password = document.querySelector("#password");
  let checkPassword = document.querySelector("#check-password");

  userId.addEventListener("change", checkID);
  password.addEventListener("change", checkPW);
  checkPassword.addEventListener("change", comparePW);

  document.querySelector("#signupForm").addEventListener("submit", (event) => {
    if (!validateForm()) {
      event.preventDefault();
    }
  });

  function checkID() {
    if (userId.value.length < 4 || userId.value.length > 15) {
      alert("아이디는 4~15자리의 영문과 숫자로 입력하세요");
      userId.focus();
      userId.select();
      return false;
    }
    return true;
  }

  function checkPW() {
    if (password.value.length < 8) {
      alert("비밀번호는 8자리 이상 입력하세요");
      password.focus();
      password.select();
      return false;
    }
    return true;
  }

  function comparePW() {
    if (password.value !== checkPassword.value) {
      alert("비밀번호가 일치하지 않습니다");
      checkPassword.focus();
      checkPassword.select();
      return false;
    }
    return true;
  }

  function validateForm() {
    return checkID() && checkPW() && comparePW();
  }
});
