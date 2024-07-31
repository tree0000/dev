//동기: 해당작업이 끝날 때꺼지 작업을 시작하지 않고 다 끝난뒤 새로운 작업시작
//단점: 하나의 작업이 끝나기 전에 완료되지 않으면 모든 작업이 이루어지지 않음

const { rejects } = require("assert");
const { async } = require("fast-glob");
const { resolve } = require("path");
const { log } = require("yeoman-environment/lib/util/util");

// const { rejects } = require("assert");
// const { error, log } = require("console");
// const { promises } = require("dns");
// const { resolve } = require("path");

//비동기: 하나의 작업이 끝나기 전에 다른 새로운 작업을 할 수 있다.(병렬)
//콜백함수,프로미스,async,await 로 작성 가능
//콜백:  다른함수의 (조건이 충족되거나 이벤트가 발생) 인자로 넘겨지고 해당 함수가 처리된 후 호출
//-----------------------------------------------------------------------
// function callback() {
//   console.log("콜백함수가 호출됨");
// }
// setTimeout(callback, 1000);
// console.log("작업 수행");

// function getUsers(callback) {
//   setTimeout(() => {
//     callback = [
//       { name: "Kim", email: "Kim@gmail.com" },
//       { name: "Lee", email: "Lee@gmail.com" },
//       { name: "Park", email: "Park@gmail.com" },
//     ];
//   }, 1000);
// }

// function findUser(name, callback) {
//   getUsers((users) => {
//     const user = users.find((user) => user.name === name);
//     callback(user, email);
//   });
// }
// let user = findUser("Kim", (user) => {
//   console.log(user);
// });
//-----------------------------------------------------------------------
// 다른방법

// function callback() {
//   console.log("콜백함수가 호출됨");
// }
// setTimeout(callback, 1000);
// console.log("작업 수행");

// function getUsers() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const users = [
//         { name: "Kim", email: "Kim@gmail.com" },
//         { name: "Lee", email: "Lee@gmail.com" },
//         { name: "Park", email: "Park@gmail.com" },
//       ];
//       resolve(users);
//     }, 1000);
//   });
// }

// function findUser(name) {
//   return getUsers().then((users) => {
//     return users.find((user) => user.name === name);
//   });
// }

// findUser("Kim").then((user) => {
//   console.log(user);
// });
//-----------------------------------------------------------------------
//이벤트 핸들러 콜백
//비동기식 처리가 많아질수록 코드가 복잡,가독성 떨어짐 ->Promise 사용
//Promise
// 작업 중 (pending) ­비동기 연산이 진행 중
// 완료됨 (fulfilled) ­ 비동기 연산의 결과에 따라 나타나는 상태
// 거부됨(rejected) ­ 비동기 연산의 결과에 따라 나타나는 상태

// let greeting = document.querySelector("#greeting");
// greeting.addEventListener("click", sayHello);
// function sayHello() {
//   alert("안녕하세요");
// }
//-----------------------------------------------------------------------
//resolve:정상적인 결과 값을 반환
//reject:정상적이지 않은 값을 반환
// promise 객체가 반환하는 값을 구하기 위해서는 then() 메서드를 사용한다. 두 개의 콜백 함수를 인수로 받는다.
// 두번째인수에는거부됨상태를처리하는함수를지정한다.
//  두인수는선택적이며두번째인수를생략할수있다.
// catch() 메서드를 사용하여 거부됨 상태만 처리할 수 있다.

//Promise() 생성자 함수는 비동기 연산을 수행하는 콜백 함수를 인수로 받아들인다.

// function getUser() {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       resolve([
//         { name: "Kim", email: "Kim@gmail.com" },
//         { name: "Lee", email: "Lee@gmail.com" },
//         { name: "Park", email: "Park@gmail.com" },
//       ]);
//     }, 1000);
//   });
// }
// let promise = getUser();
// promise.then((users) => console.log(users));
//-----------------------------------------------------------------------
// let success = false;
// function getUser() {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       if (success) {
//         setTimeout(() => {
//           resolve([
//             { name: "Kim", email: "Kim@gmail.com" },
//             { name: "Lee", email: "Lee@gmail.com" },
//             { name: "Park", email: "Park@gmail.com" },
//           ]);
//         }, 1000);
//       } else {
//         rejects("실패");
//       }
//     });
//   });
// }
// let promise = getUser();
// promise.then(
//   (users) => console.log(users),
//   (error) => console.log(error)
// );
//-----------------------------------------------------------------------
//then(), catch() 를 함께 사용할 수 있고, 완료됨과 거부됨 상태일 때 모두 처리해야 하는 콜백 함수를 실행할 수 있다.

// let success = false;
// function getUser() {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => {
//       if (success) {
//         setTimeout(() => {
//           resolve([
//             { name: "Kim", email: "Kim@gmail.com" },
//             { name: "Lee", email: "Lee@gmail.com" },
//             { name: "Park", email: "Park@gmail.com" },
//           ]);
//         }, 1000);
//       } else {
//         rejects("실패");
//       }
//     });
//   });
// }
// let promise = getUser();
// promise
//   .then((users) => console.log(users))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("작업완료"));
//-----------------------------------------------------------------------
//then() 메소드는 체인으로 연결 가능
//에러남
// let success = true;

// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (success) {
//         resolve([
//           { name: "Kim", email: "Kim@gmail.com" },
//           { name: "Lee", email: "Lee@gmail.com" },
//           { name: "Park", email: "Park@gmail.com" },
//         ]);
//       } else {
//         reject("실패");
//       }
//     }, 1000);
//   });
// }

// let promise = getUser();
// promise
//   .then((users) => users.find((user) => user.name === "Kim"))
//   .then((user) => console.log(user.email))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("작업완료"));
//-----------------------------------------------------------------------
//병렬 Promise 여러비동기연산을병렬로동시에수행하고각비동기연산의결과를하나로모으는작업을수행할수있다

//const p1 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve(10), 2000)
// );
// const p2 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve(20), 1000)
// );
// const p3 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve(30), 3000)
// );
// let promises = [p1, p2, p3];

// Promise.all(promises).then((results) => {
//   const total = results.reduce((s, r) => s + r);
//   console.log(`결과: ${results}`);
//   console.log(`합계:${total}`);
//});
//-----------------------------------------------------------------------
//reject 활용 promise.all() 메서드가 실행될 때 p2가 거부됨에 따라 비동기 연산은 실패하게 된다.
//.allSettled는 실행을 완료하기를 기다렸다가 객체를 반환한다.( 해결법)

// const p1 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve(10), 2000)
// );
// const p2 = new Promise((resolve, reject) =>
//   setTimeout(() => resolve(20), 1000)
// );
// const p3 = new Promise((resolve, reject) => setTimeout(() => reject(30), 3000));

// let promises = [p1, p2, p3];

// Promise.allSettled(promises).then((results) => {
//   const fulfilledResults = results
//     .filter((results) => results.status === "fulfilled")
//     .map((results) => results.value);
//   const total = fulfilledResults.reduce((sum, value) => sum + value, 0);
//   console.log(`결과: ${fulfilledResults}`);
//   console.log(`합계:${total}`);
// });
//-----------------------------------------------------------------------
//순차 Promise
// 순차적으로 실행할 수 있다.
// then() 메서드 체인을 이용하여 비동기 연산을 수행하는 가 함수를 순차적으로 실행할 수 있다.
// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { name: "Kim", email: "Kim@gmail.com" },
//         { name: "Lee", email: "Lee@gmail.com" },
//         { name: "Park", email: "Park@gmail.com" },
//       ]);
//     }, 2000);
//   });
// }

// function findUser(users) {
//   return new Promise((resolve, reject) => {
//     console.log(users);
//     setTimeout(() => {
//       resolve(users.find((user) => user.name === "Kim"));
//     }, 1000);
//   });
// }

// function getEmail(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(user.email);
//     }, 3000);
//   });
// }

// getUser().then(findUser).then(getEmail).then(console.log);
//-----------------------------------------------------------------------
//문제 1초 후에 "A", 2초 후에 "B"를 반환하는 두개의 promise를 생성하고 두promise가 머두 완료된 후 "완료!"를 출력해라
// const promise1 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("A");
//   }, 1000);
// });
// const promise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("B");
//   }, 2000);
// });

// Promise.all([promise1, promise2]).then((results) => {
//   console.log(results);
//   console.log("완료!");
// });

//강사 풀이
// const promiseA = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("A완료");
//   }, 1000);
// });

// const promiseB = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("B완료");
//   }, 2000);
// });

// let promises = [promiseA, promiseB];
// Promise.all(promises).then((results) => {
//   console.log("완료!", results);
// });
//-----------------------------------------------------------------------
//문제
// 1초 후에 숫자 5를 반환하는 Promise와 1.5초 후에 숫자 10을 곱한 값을 반환하는
// promise를 작성하시오, 만약 5를 반환하는 promise가 실패하면 에러 출력
// 1초 후에 숫자 5를 반환하는 프로미스
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 1000);
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 1500);
// });
// promise1
//   .then((value) => {
//     return promise2.then((mul) => {
//       return value * mul;
//     });
//   })
//   .then((result) => {
//     console.log("결과:", result);
//   })
//   .catch((error) => {
//     console.error("에러 발생:", error);
//   });
// //강사 풀이
// let success = false;

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (success) {
//       resolve(5);
//     } else {
//       reject("에러");
//     }
//   }, 1000);
// });

// promise
//   .then((num) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(num * 10);
//       }, 1500);
//     });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//-----------------------------------------------------------------------
//Promise async&await
//async: 비동기 연산을 처리하는 함수를 정의하는데 사용
// await :Promise 객체가 완료됨 상태가 되거나 거부됨 상태가 될 때까지 기다릴 수 있다
// 항상 async 예약어가 지정된 함수 안에서만 사용해야 한다.

// async function sayHello() {
//   return "안녕";
// }
// sayHello().then(console.log);

//함수 표현식
// let sayHello = async function () {
//   return "안녕";
// };
// sayHello().then(console.log);

//화삺표 함수
// let sayHello = async  () => "안녕"
// sayHello().then(console.log)

// class Greeter {
//   sayHello() {
//     return "안녕";
//   }
// }
// const greeter = new Greeter();
// greeter.sayHello().then(console.log);

// function sayHello() {
//   return Promise.resolve("안녕");
// }
// sayHello().then(console.log);

// function sayHello() {
//   return Promise((resolve, rejects) => {
//     setTimeout(() => resolve("안녕"));
//   });
// }
// sayHello().then(console.log);
// async function sayHello() {
//   return new Promise((resolve, rejects) => {
//     setTimeout(() => rejects("거부"), 3000);
//   });
// }
// async function display() {
//   try {
//     let result = await sayHello();
//     console.log(result);
//   } catch (e) {
//     console.log(e);
//   }
// }
// display();
//-----------------------------------------------------------------------
//순차적 프로미스처럼 만들기
// function getUser() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve([
//         { name: "Kim", email: "Kim@gmail.com" },
//         { name: "Lee", email: "Lee@gmail.com" },
//         { name: "Park", email: "Park@gmail.com" },
//       ]);
//     }, 2000);
//   });
// }

// function findUser(users, name) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(users.find((user) => user.name === name));
//     }, 1000);
//   });
// }

// function getEmail(user) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(user.email);
//     }, 3000);
//   });
// }

// async function getUserEmail(name) {
//   let users = await getUser();
//   let user = await findUser(users, name);
//   let email = await getEmail(user);
//   return email;
// }

// async function displayUserEmail() {
//   let email = await getUserEmail("Kim");
//   console.log(email);
// }

// displayUserEmail();
//-----------------------------------------------------------------------
//제너레이터와 프로미스
//제너레이터와 프로미스를 함께 사용하여 마치 동기 코드처럼 느껴지게 비동기 코드를 작성할 수 있다

// const myPromise = () =>
//   new Promise((resolve) => {
//     resolve("value is");
//   });

// function* gen() {
//   let result = "";
//   yield myPromise().then((data) => {
//     result = data;
//   });
//   yield result + "1";
// }

// const asyncFunc = gen();
// const val1 = asyncFunc.next();
// console.log(val1);

// val1.value.then(() => {
//   console.log(asyncFunc.next());
// });

async function* asyncSequence(
  from = 0,
  to = Infinity,
  interval = 1,
  timeout = 1000
) {
  let next = from;
  while (next <= to) {
    yield new Promise((resolve, rejects) => {
      setTimeout(() => resolve(next), timeout);
    });
    next += interval;
  }
}
(async () => {
  let seq = asyncSequence(2, 10, 2);
  for await (let value of seq) console.log(value);
})();

//문제
//제네레이터를 사용하여 여러 비동기 작업을 순차적으로 실행하는 함수를 작성하고
//각 작업은 2초후에 완료 된다고 가정하고, 작업이 완료 돨때 마다 결과출력
//제네레이터는 작업이 완료될 때마다 다음작업을 실행

function* Generator() {
  yield "작업 1";
  yield "작업 2";
  yield "작업 3";
}
async function work(name) {
  console.log(`${name} 시작`);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log(`${name} 완료`);
  return `${name} 결과`;
}
Print = async () => {
  const generator = Generator();
  for (let task of generator) {
    const result = await work(task);
    console.log(`결과: ${result}`);
  }
};
Print();

//(풀이)
function* taskGenerator() {
  yield new Promise((resolve) => setTimeout(() => resolve("1 완료"), 2000));
  yield new Promise((resolve) => setTimeout(() => resolve("2 완료"), 2000));
  yield new Promise((resolve) => setTimeout(() => resolve("3 완료"), 2000));
}
const tasksDisplay = async () => {
  const tasks = taskGenerator();
  for (let task of tasks) {
    const result = await task;
    console.log(result);
  }
};
tasksDisplay();
//문제
//사용자 정보를 가져오는 비동기 함수를 작성하고 async/await를 사용하여 호출해라
const users = {
  1: { name: "Kim", age: 25 },
  2: { name: "Lee", age: 25 },
  3: { name: "Jung", age: 25 },
};
getUser = async (userI) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users[userI];
      if (user) {
        resolve(user);
      } else {
        reject(new Error("error"));
      }
    }, 2000);
  });
};

const display = async (userI) => {
  try {
    const user = await getUser(userI);
    console.log(`User ${userI}:`, user);
  } catch (e) {}
};
display(1);
display(2);
display(3);
display(4);

//풀이
const UserData = (userId) => {
    return new Promise((resolve, reject) => { 
      setTimeout(() => {
        const users = {
          1: { name: "A", age: 25 },
          2: { name: "B", age: 30 },
          3: { name: "C", age: 28 },
        };
        const user = users[userId];
        if (user) {
          resolve(user);
        } else {
          reject("못찾음");
        }
      }, 1000);
    });
  };
  
  const getUser = async (userId) => {
    try {
      const userDataGet = await UserData(userId);
      console.log(`${userDataGet.name}, ${userDataGet.age}`);
    } catch (error) {
      console.log(error);
    }
  };
  
  getUser(1); // A, 25
  getUser(2); // B, 30
  getUser(3); // C, 28
  getUser(4); // 못찾음
  
