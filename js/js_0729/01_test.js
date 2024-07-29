// document.querySelector("선택자");

// const $input = document.querySelector("input");
// console.log($input); //null

//태그 저장에는 $를 쓴다.

// const $button = document.querySelector("button");
// console.log($button); //null

// const $$buttons = document.querySelectorAll("button");
// console.log($$buttons); //NodeList

document.addEventListener("click", () => {
  console.log(this);
});
