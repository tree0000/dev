// // function onButtonClick() {
// //   alert("눌렀군요");
// // }
// // document.querySelector(".save-button").addEventListener("click", onButtonClick);

// function work() {
//   console.log("work!");
// }
// //바로 실행되는것이 아님
// setTimeout(work, 1000); //시간이후에 한번실행
// setInterval(work, 5000); //시간을 반복하여 실행
// console.log("work process");

// //함수가 실행이 다되고 실행됨
// function work() {
//   console.log("시작");
//   setTimeout(function () {
//     console.log("작업중");
//   }, 0); // 0을 넣어도 바로 실행되지 않는다.
//   console.log("종료");
// }
// work();

// //예제xmlHttpRequest(XHR)
// function request(url, successCallback, failCallback) {
//   const xhr = new XMLHttpRequest();
//   xhr.addEventListener("load", (e) => {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         successCallback(JSON.parse(xhr.responseText));
//       } else {
//         failCallback(xhr.statusText);
//       }
//     }
//   });

//   xhr.addEventListener("error", (e) => failCallback(xhr.statusText));

//   xhr.open("GET", url);
//   xhr.send();
// }

// //xmlHttpRequest(XHR)경우 비동기를 포기하고동기방식으로 동작하게 할 수 있다.
// function syncRequest(url){
//     const xhr =new XMLHttpRequest()
//     xhr.open('GET', url, false)
//     xhr.send()
//     if(xhr.status === 200){
//         return JSON.parss(xhr.responseText)
//     }else{
//         throw new Error(xhr.statusText)
//     }
// }
// //async
// const API_ENDPOINT = 'https://kdt.roto.codes'
// request(`${API_ENDPOINT}/todos`,(todos)=>{
//     const completedTodo = todo.find(todo => todo.isCompleted)
//     if(completedTodo){
//         request{`${API_ENDPOINT}/comments?todo.id=${completedTodo.id}`,(comments)=>{
//             Comments.forEach(Comment=>console.log(Comment.content))
//         }}
//     }
// })

// //sync는 요청 후 응답이 오기전까지 브라우저가 굳어버림
// const API_ENDPOINT = 'https://kdt.roto.codes'
// const todos = syncRequest(`${API_ENDPOINT}/todos`)
// const completedTodo = todo.find(todo => todo.isCompleted)
// if(completedTodo){
//     const comments =syncRequest(`${API_ENDPOINT}/comments?todo.id=${completedTodo.id}`)
//     Comments.forEach(Comment=>console.log(Comment.content))
// }
