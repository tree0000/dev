//fetch api

// http 요청을 더 쓰기 편하게 해주는 api
//XMLHTTPRequest대체 (Promise) 기반 동작

fetch("https://kdt.roto.codes/todos")
  .then((res) => {
    return res.json();
  })
  .then((todos) => {
    console.log(todos);
  });
