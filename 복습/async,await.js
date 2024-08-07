const delay = (delayTime) => {
  return new Promise((resolve) => setTimeout(resolve, delayTime));
};

const work = async () => {
  console.log("work run");

  await delay(1000);
  console.log("work 1 complete");
  await delay(1000);
  console.log("work 2 complete");
  await delay(1000);
  console.log("work 3 complete");
  await delay(1000);
  console.log("work all complete");
};
work();

// //async 함수표기
// async function asyncFunction(){
//   const res = await requestAnimationFrame(...)
// }
// //화살표
// const asyncFunction = async() {
//   const res = await requestAnimationFrame(...)
// }

function run() {
  return "hello";
}
console.log(run());

async function asyncRun() {
  return "hello";
}
console.log(run());

async function asyncRun() {
  return "hello";
}
asyncRun().then((message) => console.log(message));
