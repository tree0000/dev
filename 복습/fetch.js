//fetch api

// http 요청을 더 쓰기 편하게 해주는 api
//XMLHTTPRequest대체 (Promise) 기반 동작

// fetch("https://kdt.roto.codes/todos")
//   .then((res) => {
//     return res.json();
//   })
//   .then((todos) => {
//     console.log(JSON.parse(data));
//   });

// const $image = document.createElement("img");
// const imageURl = "https://indistreet.com/_next/";

// fetch(imageURl)
//   .then((res) => {
//     return res.blob();
//   })
// .then((data) => {
//   // $image.src = URL.createObjectURL(data)
//   const url = URL.createObjectURL(data);
//   console.log(url);

//   $image.src = url;

//   document.querySelector("body").appendChild($image);
// });

//fetch api 는 HTTP error 가 발생하더라도  reject 되지않는다.
//네트워크 에러나 요청이 완료되지 못한 경우만 reject 된다
//에러가 생겼을 경우 then으로 떨어지므로 status code 나 ok를 해주는게 좋다.

fetch("https://kdt.roto.codes/undefined-api")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    document.querySelector("body").innerHTML = e.message;
  });
