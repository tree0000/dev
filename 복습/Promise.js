// //promise는 비동기 작업을 제어하기 위해 나온개념
// //callback hell에서 벗어나게 해줌
// //depth가 크게 증가지 않는 효과가 있다.

// const promise = new Promise((resolve, reject) => {
//   //비동기 상황이 종료될 때 -> resolve
//   //오류상황일때 reject
// });

// function asyncPromiseWork() {
//   return new Promise((resolve, reject) => {
//     return resolve("complete");
//   });
// }
// asyncPromiseWork().then((result) => console.log(result));

// asyncPromiseWork()
//   .then((result) => {
//     return asyncPromiseWork(result);
//   })
//   .then((result) => {
//     return PromiseThirdWork(result);
//   })
//   .then((result) => {
//     return PromiseFinalWork(result);
//   });

// //에러는 .catch로 잡는다
// asyncPromiseWork()
//   .then((result) => {
//     return asyncPromiseWork(result);
//   })
//   .then((result) => {
//     return PromiseThirdWork(result);
//   })
//   .then((result) => {
//     return PromiseFinalWork(result);
//   })
//   .catch((e) => {
//     alert("에러군요");
//   });

// //성공 실패여부와 상관없이 호출할 경우는 finlly를 사용
// asyncPromiseWork()
//   .then((result) => {
//     return asyncPromiseWork(result);
//   })
//   .then((result) => {
//     return PromiseThirdWork(result);
//   })
//   .then((result) => {
//     return PromiseFinalWork(result);
//   })
//   .catch((e) => {
//     alert("에러군요");
//   })
//   .finally(() => {
//     ("끝내라");
//   });

//기존의 callback함수를  promise 형태 변환가능
// const delay = (delayTime) =>
//   new Promise((resolve) => setTimeout(resolve, delayTime));

// delay(5000)
//   .then(() => {
//     doSomething();
//     return delay(3000);
//   })
//   .then(() => {
//     console.log("complete!");
//   });

// //promise 내장함수
// request(`${API_END_POINT}/todos`)
//   .then((data) => {
//     this.setState({
//       isLoading: false,
//       todoList: data,
//       comments: [],
//     });
//     return delay(5000);
//   })
//   .then(() => {
//     console.log("completed");
//   });

// const promise1 = delay(1000);
// const promise2 = delay(1000);
// const promise3 = delay(1000);

// promise.finally({ promise1, promise2, promise3 }).then(() => {});

//promise.race(iterable)
//여러개의 promise 중 하나라도 끝나면 resolve&reject 되면 종료
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

// const promises = [1, 2, 3, 4, 5].map((n) => {
//   const delayTime = getRandomInt(1000, 5000);
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`${n}번 고양이 완주`);
//       resolve(`${n}번 고양이 승리`);
//     }, delayTime);
//   });
// });

// Promise.race(promises).then((message) => {
//   console.log(message);
// });

//Promise.any
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
const promises = [1, 2, 3, 4, 5].map((n) => {
  const delayTime = getRandomInt(1000, 5000);
  return new Promise((resolve) => {
    if (n === 1) {
      return reject(`${n}번 고양이 기권`);
    }
    setTimeout(() => {
      console.log(`${n}번 고양이완주`);
      resolve(`${n}번 고양이 승리`);
    }, delayTime);
  });
});

//Promise.allSettled
//여러 promise들이 성공,실패 상관없이 모두 이행
const promise = [1, 2, 3, 4, 5].map((n) => {
  const delayTime = getRandomInt(1000, 5000);
  return new Promise((resolve, reject) => {
    if (n % 2 === 0) {
      return rejectt(`${n}번 고양이 완주x`);
    }
    setTimeout(() => {
      resolvet(`${n}번 고양이완주`);
    }, delayTime);
  });
});
promise.allSettled(promises).then((results) => console.log(results));

//Promise.resolve
const cached = {
  roto: "bassist",
};
const findMember = (menubarName) => {
  if (cached(menubarName)) {
    return Promise.resolve(cached[menubarName]);
  }
  return requestAnimationFrame(`/members/${memberName}`).then((member) => {
    cache[member.memberName] = memberName;
    return memberName;
  });
};
findMember("roto").then((memberName) => console.log(memberName));
