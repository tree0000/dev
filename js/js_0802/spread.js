//스프레드 문법
// function foo(...rest) {
//   console.log(rest);
// }
// foo(...[1, 2, 3]);

// let arr3 = [1, 4];
// let arr4 = [2, 3];
// arr3.splice[(1, 0, arr4)];
// console.log(arr3);

// arr3.splice(1, 0, ...arr4);
// console.log(arr3);

// const origin = [1, 2];
// const copy = origin.slice();
// console.log(copy);
// console.log(copy === origin);

// const origin = [1, 2];
// const copy = [...origin];
// console.log(copy);
// console.log(copy === origin);

// const obj = { x: 1, y: 2 };
// const copy = { ...obj };
// console.log(copy);

// const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
// console.log(merged);

// const merged = Object.assign({}, { x: 1, y: 2 }, { y: 3, x: 3 });
// console.log(merged);

// const merged = { ...{ x: 1, y: 2 }, ...{ y: 3, x: 3 } };
// console.log(merged);

// const arr = [1, 2, 3];
// const [one, two, three] = arr;
// console.log(one, two, three);

// const [a, b] = [1, 2];
// console.log(a, b);

// const [c,d] =[1]
// console.log(c,d);

// const user = { firstName: "Kim", lastName: "Lee" };
// const { lastName, firstName } = user;
// console.log(lastName, firstName);

// function printTodo({ content, complete }) {
//   console.log(`할일${content}는 ${complete ? "완료" : "비완료"}상태입니다.`);
// }
// printTodo({ id: 1, content: "HTML", complete: true });

const user = {
  name: "Lee",
  address: {
    zipCode: "030212",
    city: "Seoul",
  },
};
const {
  address: { city },
} = user;
console.log(city);

//객체 person을 만들고 Name과age를 구조분해 할당하여 변수 userName과 userAge에 각각 저장한 후 , 
//두변수를 활용하여 아래와 같은 형식으로 문자열을 출력하는 코드 작성

const person = {
    name: "Park",
    age: 10
  };
  
  const { name: userName, age: userAge } = person;
  
  console.log(`Name: ${userName}, Age: ${userAge}`);
  