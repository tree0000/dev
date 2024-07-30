// Map / Set;

//set 중복되지 않는 유일한 값들의 집합이다.
// const set = new Set();
// console.log(set);

// const set1 = new Set([1, 2, 3, 3]);
// console.log(set1);

// const uniq = (array) => [...new Set(array)];
// console.log(uniq(2, 1, 2, 3, 4, 5, 4));
//-------------------------------------------------------------------
//size 프로퍼티는 getter  함수만 존재하는 접근자 프로퍼티이다.
// const { size } = new Set([1, 2, 3, 3]);
// console.log(size);

//Set 객체에 요소를 추가할 떄는 add 메서드를 사용한다. (체이닝 가능)
// const set = new Set();
// set.add(1);
// console.log(set);
//-------------------------------------------------------------------
//특정 요소가 존재하는 지 확인할 때 has 메서드 사용
// const set = new Set([1, 2, 3]);
// console.log(set.has(5));

//요소를 삭제하려면 delete 사용 연속 호출 사용 불가 일괄삭제:clear
// set.delete(2);
// set.clear();
// console.log(set);
//-------------------------------------------------------------------
//for of 와 for Each() 메서드 (순회)
// let odds = new Set([1, 3, 5, 7, 9]);
// let sum = 0;
// for (let o of odds) sum += o;
// console.log(sum);

// let product = 1;
// odds.forEach((o) => (product *= o));
// console.log(product);

// const userIDs = [101, 102, 101, 103, 102];
// const uniqueUserIDs = new Set(userIDs);
// uniqueUserIDs.forEach((userID) => {
//   console.log(`ID:${userID}`);
// });

// const tags = ["JS", "CSS", "HTML", "HTML"];
// const uniqueTags = new Set(tags);
// uniqueTags.forEach((tag) => {
//   console.log(`tag:${tag}`);
// });
//-------------------------------------------------------------------
//Set 스프레드 문법 배열 디스트럭처링 (구조분해 배열이나 객체의 속성을 쉽게 추출)
// const set = new Set([1, 2, 3]);
// console.log([...set]);
// const [a, ...rest] = set;
// console.log(a, rest);
//-------------------------------------------------------------------
// //set객체는 합집합 교집합 차집합 개념을 가진다
// let set1 = new Set([1, 2, 3]);
// let set2 = new Set([4, 3, 2]);
// let union = new Set([...set1, ...set2]);
// //합집합
// let intersection = new Set([...set1].filter((x) => set2.has(x)));
// console.log(intersection);
// //교집합
// let difference = new Set([...set1].filter((x) => !set2.has(x)));
// console.log(difference);
//-------------------------------------------------------------------
//문제
//Set 객체 요소의 개수를 구하시오
"I am a student";

// let a = "I am a student";
// const set = new Set(a);
// console.log(`Set 객체 요소의 개수: ${set.size}`);
//-------------------------------------------------------------------
//Map
//키와 값의 쌍으로 이루어진 컬렉션

//구분 키로 사용가능 이터러블 요소개수
//객체 문자열 또는 심벌 값 x object.Key(obj).length

// const map1 = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
// ]);
// console.log(map1);

// const map2 = new Map([[1, 2]]);
// console.log(map2);

// const map = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
// ]);
// console.log(map);
//-------------------------------------------------------------------
//요소개수 확인 size
// const { size } = new Map([
//   ["key1", "value1"],
//   ["key2", "value2"],
// ]);
// console.log(size);

// const map = new Map();
// console.log(map);
// map.set("key1", "value1");
// console.log(map);
//-------------------------------------------------------------------
//키 타입 제한이 없다
// const map = new Map();
// const Lee = { name: "Lee" };
// const Kim = { name: "Kim" };
// map.set(Lee, "developer").set(Kim, "designer");
// console.log(map);

// const map = new Map();
// const Lee = { name: "Lee" };
// const Kim = { name: "Kim" };

// map.set(Lee, "developer").set(Kim, "designer");
// console.log(map.delete(Kim));
// console.log(map);

// map.set(Lee, "developer").set(Kim, "designer");
// console.log(map.has(Kim));
// console.log(map);
// //map clear값은 undefined 가 된다
// map.set(Lee, "developer").set(Kim, "designer");
// console.log(map.clear());
// console.log(map);
//-------------------------------------------------------------------
//map 첫번째 값은 키 두번째 값은 값이다.
// let map = new Map();
// map.set(0, "zero");
// map.set(1, "one");
// map.forEach((value, key) => console.log(key, value));
//-------------------------------------------------------------------
//문제
// map 객체를 이용하여 세과목 성적의 합계와 평균을 구하시오
// 국어:85, 영어:90, 수학95
// const scores = new Map([
//   ["국어", 85],
//   ["영어", 90],
//   ["수학", 95],
// ]);
// let sum = 0;
// let avg = 0;
// for (let score of scores.values()) {
//   sum += score;
// }
// avg = sum / scores.size;
// console.log(`합계: ${sum}, 평균: ${avg.toLocaleString(2)}`);
//-------------------------------------------------------------------
// map 객체요소를 forEach 문으로 실행
// title:유럽 책방 문화 탐구
// author:한미화
// price:23000
// const book = new Map([
//   ["title", "유럽 책방 문화 탐구"],
//   ["author", "한미화"],
//   ["price", 23000],
// ]);
// book.forEach((value, key) => {
//   console.log(`${key}: ${value}`);
// });
//-------------------------------------------------------------------
//set를 이용하여 배열에서 중복요소를 제거해라
let numbers = [3, 7, 12, 3, 12, 3];

let set = [...new Set(numbers)];
console.log(set);
