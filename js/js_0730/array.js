// const me = [1, 2, 3, 4, 5];
// console.log(me);

// let carSales = [
//   300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450,
// ];
// console.log(carSales);
// ---------------------------------------------------------------------------------------
// let carSales2 = new Array(
//   300,350,
//   400,
//   450,
//   500,
//   600,
//   650,
//   620,
//   580,
//   620,
//   580,
//   620,
//   500,
//   450
// );

// let copy = Array.from(carSales);
// console.log(copy);

// let concat = [0, ...carSales, 300, 500];
// console.log(concat);
//기본 배열의 요소를 복사하는것이기 때문에 복사본 배열을 수정해도 원래 배열에 영행이 없다.
// ---------------------------------------------------------------------------------------
//합산 연산자
// let numbers = [..."0123456789"];
// console.log(numbers);
// ---------------------------------------------------------------------------------------
//배열요소 접근
// carSales[4] =680;
// let june = carSales["5"];
// let may = carSales[4];
// console.log(may);

// let june = carSales["5"];
// console.log(june);

// carSales[12] = -50;
// console.log(carSales);

// let = [1, 2, 3, 4, 5];
// ---------------------------------------------------------------------------------------
//길이

// let = [1, 2, 3, 4, 5];
// let len = a.length;
// console.log(len);
// a.length = 0;
// console.log(a);

// let jan, fab, mar, rest;
// [jan, fab, mar, ...rest] = carSales;
// console.log(jan, fab, mar);
// console.log(rest);
// ---------------------------------------------------------------------------------------
//for of문

// let sum = 0;
// for (let sale of carSales) sum += sale;
// let avg = sum / carSales.length;
// let roundedAverage = avg.toFixed(2);
// console.log(avg);
// console.log(roundedAverage);

// let sum = 0;
// for (let [index, sale] of carSales.entries()) {
//   if (index % 2 === 0) sum += sale;
// }
// let avg = sum / (carSales.length / 2);
// console.log(avg);
// ---------------------------------------------------------------------------------------
//for in - 키 목록 반환 for of 값을 반환

// let list = [4, 5, 6];
// for (let i in list) {
//   console.log(i);
// }
// for(let i of list){
//     console.log(i);
// }

// const car = {
//   maker: "BMW",
//   color: "red",
//   year: "2012",
// };
// for (let prop of car) {
//   console.log(prop);
// }
//일반객체는 이터러블이 아니므로 에러 발생
// ---------------------------------------------------------------------------------------
//forEach 함수를 호출하여 배열 요소를 다루는 기능 새로운 배열 반환 아님!!

// let sum = 0;
// carSales.forEach((sale) => {
//   sum += sale;
// });
// let avg = sum / carSales.length;
// console.log(avg);

// carSales.forEach((sale, index, array) => {
//   array[index] = sale + 50;
// });
// console.log(carSales);
// ---------------------------------------------------------------------------------------
//map() 새로운 배열을 생성하여 반환

// let newCarSales = carSales.map((sale) => sale + 50);
// console.log(newCarSales);
// console.log(carSales);
// ---------------------------------------------------------------------------------------
//filter 배열에서 각요소를 순회하면서 새로운 배열을 생성하여 반환

// let highSales = carSales.filter((sale) => sale > 500);
// console.log(highSales);
// ---------------------------------------------------------------------------------------
// //짝수번쨰 월평균 판매대수만 출력

// let evenSales = carSales.filter((sale, index) => index % 2 === 1);
// console.log(evenSales);
// ---------------------------------------------------------------------------------------
//every()  조건연산에서의 결과 반환

// let allSaleSix = carSales.every((sale) => sale > 600);
// console.log(allSaleSix);
// ---------------------------------------------------------------------------------------
//some() 하나라도 참 또는 거짓을 반환하는 경우

// let anySaleSix = carSales.some((sale) => sale > 600);
// console.log(anySaleSix);
// ---------------------------------------------------------------------------------------
//reduce 더이상 배열 요소가 없을 떄까지 반복하여 반환

// let sum = carSales.reduce((t1, t2) => t1 + t2, 0);
// console.log(sum);
// let avg = sum / carSales.length;
// console.log(avg);
//reduce로 가장 높은 판매대수

// let highest = carSales.reduce((t1, t2) => (t1 > t2 ? t1 : t2));
// console.log(highest);
// ---------------------------------------------------------------------------------------
//find() /findindex
// let firstSaleSix = carSales.find((sale) => sale > 600);
// console.log(firstSaleSix);
// let firstSaleSixIndex = carSales.findIndex((sale) => sale > 600);
// console.log(firstSaleSixIndex); // 6번째
// ---------------------------------------------------------------------------------------
//flat 배열요소에 다른 배열을 포함할때 배열을 풀어준다 (다른배열을 포함할때)

// let flat = [1, [2, 3]].flat(); //[ 1, 2, 3 ]
// console.log(flat);

// let message = ["오늘은", "비가 옵니다."];
// let words = message.flatMap((msg) => msg.split("")); //평탄화 작업
// console.log(words);
// ---------------------------------------------------------------------------------------
// concat 두개이상의 배열을 병합하는데 사용 기존배열을 변경하지 않고 새배열을 반환

// const array1 = ["a", "b", "c"];
// const array2 = ["d", "e", "f"];
// const array3 = array1.concat(array2);
// console.log(array3);

// let original = [1, 2, 3];
// let newArray;
// newArray = original.concat(4, 5);
// newArray = original.concat([4, 5], [6, 7]);
// console.log(newArray);
// ---------------------------------------------------------------------------------------
// let stack = [];
//push() 배열의 끝에 요소를 추가
// stack.push(1);
// stack.push(2, 3);
// stack.push(4);
// console.log(stack);
// [
//     1, 2, 3, 4,
//     5, 6, 7
//   ]
//   [ 1, 2, 3 ]
//   [ 1, 2 ]
// ---------------------------------------------------------------------------------------
//pop() 배열끝에 있는 요소를 꺼내 반환 후 삭제
// stack.pop();
// console.log(stack);
// ---------------------------------------------------------------------------------------
//unshift() 배열의 처음에 요소 추가
// stack.unshift(1);
// stack.unshift(2, 3);
//shift() 배열의 처음에 있는 요소를 꺼내와 삭제
// stack.shift();
// console.log(stack);
//[ 2, 3, 1 ]
// ---------------------------------------------------------------------------------------
//slice() 배열을 잘라서 분할된 서브 배열을 반환 원래의 배열을 변경하지 않는다. 두번쨰 인수는 인덱스

//문제 1 37,32가 나오도록 출력해
// const numbers = [20, 37, -21, 32, -2];
// document.write(numbers[1] + ", " + numbers[3]);
// ---------------------------------------------------------------------------------------
//splice 배열을 잘라서 분할된 서브 배열을 반환 원래 배열을 변경 두번쨰 인수를 생략하면 마지막요소까지 잘라냄
// let a = [1, 2, 3, 4, 5];
// a.splice(0, 2);
// a.splice(2);
// a.splice(0, 2, 10, 20);
// console.log(a);
// let b = a.slice(0, 2);
// let c = a.slice(1, -1);
// console.log(c);
// console.log(a);
// ---------------------------------------------------------------------------------------
//fill() 배열을 인수에 지정된 값으로 채운다.
// let a = new Array(5);
// a.fill(0);
// a.fill(1,1);
// a.fill(1, 1,- 1);
// console.log(a);
// ---------------------------------------------------------------------------------------
//indexOf() 배열에서 인수와 일치하는 맨처음 요소의 인덱스
// let a = [0, 1, 2, 3, 2, 1, 0];
// let b = a.indexOf(2);
// console.log(b);
//lastindexOf() 끝에서 일치하는 요소를 인덱스
// let c = a.lastIndexOf(2);
// console.log(c);
// let d = a.indexOf(5);
// console.log(d);
// ---------------------------------------------------------------------------------------
//includes() 인수에 지정된 값이 배열에 포함되어 있으면 true/false
// let a = [0, true, 2, false, NaN];
// let b = a.includes(true);
// let b = a.includes(2);
// let b = a.includes(NaN);
// console.log(b);
// ---------------------------------------------------------------------------------------
//sort() 알파벳순으로 정렬 숫자의 경우는 함수를 통해 지정
// let a = ["apple", "cherry", "banana"];
// let b = a.sort();
// console.log(b);
// let c = [22, 333, 121];
// let d = c.sort();
// console.log(d);
// let e = c.sort((a, b) => a - b);
// console.log(e);
// ---------------------------------------------------------------------------------------
//join  배열의 모든요소를 문자열로 변환하여 결합한 문자열 반환
// let a = [1, 2, 3];
// let b = a.join();
// let c = a.join("");
// console.log(c);
// ---------------------------------------------------------------------------------------

//문제
// scores = [67,82,97,100,92]
// for (let i = 0; i < scores.length; i++) {
//     console.log(scores[i]);
// }
// for (let score of scores) {
//     console.log(score);
// }
//풀이(강사)
// const scores = [67,82,97,100,92]
// for (let i = 0; i < scores.length; i++) {
//     document.write(scores[i] + '<br>')
// }
// ---------------------------------------------------------------------------------------
//문제
// const tel = ["010","1234","5678"]
// let a = tel.join('-');
// console.log(a);
//풀이(강사)
// const tel1 = ["010","1234","5678"]
// let tel2 = tel1.join('-');
// document.write(tel2)
//---------------------------------------------------------------------------------------
//문제
// const colors = ["빨강", "노랑", "파랑", "주황"];
// let a = colors.shift();
// let b = colors.join(', ');
// let color = b + ' / ' + a;
// console.log(color);

//풀이(강사)
// const colors = ["빨강", "노랑", "파랑", "주황"];
// let a = colors.shift();
// document.write(colors +"/")
// document.write(arr)
//---------------------------------------------------------------------------------------
//다차원 배열
//array of array()
//언어 자체에서 다차원 배열을 지원하지 않는다
// 그 대신에 내포된 배열을 사용하여 다차원 배열을 생성가능

// let arr = new Array(2);
// for (let i = 0; i < arr.length; ++i) {
//   arr[i] = new Array(3);
//   console.log(arr);
// }

// let arr = Array.from(new Array(2), () => new Array(3));
// console.log(arr);
//---------------------------------------------------------------------------------------
// arr[0][0] = 1;
// arr[0][1] = 2;
// arr[0][2] = 3;
// arr[1][0] = 4;
// arr[1][1] = 5;
// arr[1][2] = 6;
// console.log(arr);

// for (let i = 0; i < arr.length; ++i) {
//   for (let j = 0; j < arr[i].length; ++j) {
//     console.log(arr[i][j]);
//   }
// }
//---------------------------------------------------------------------------------------
// //3명의 학생 4과목 성적의 합계와 평균을 구해라
// [83, 90, 70, 87], [87, 93, 62, 83], [98, 90, 77, 97];

// let scores = [
//   [83, 90, 70, 87],
//   [87, 93, 62, 83],
//   [98, 90, 77, 97],
// ];
// let totalS = [];
// let avgS = [];

// for (let i = 0; i < scores.length; i++) {
//   let sum = 0;
//   for (let j = 0; j < scores[i].length; j++) {
//     sum += scores[i][j];
//   }
//   totalS.push(sum);
//   avgS.push(sum / scores[i].length);
// }
// for (let i = 0; i < scores.length; i++) {
//   console.log(`학생 ${i + 1} 합계:${totalS[i]}, avg:${avgS[i].toFixed(2)}`);
// }
//---------------------------------------------------------------------------------------
//배열을 이용하여 성적의 합계와 평균을 구하시오
// let mathScores = [90, 85, 70, 86, 97];

// let sum = 0;
// for (let i = 0; i < mathScores.length; i++) {
//   sum += mathScores[i];
// }
// let avg = sum / mathScores.length;

// console.log(`합계: ${sum}, 평균: ${avg.toFixed(2)}`);
//풀이(강사)
// let mathScores = [90, 85, 70, 86, 97];
// let sum = 0;
// let average;
// for (let mathScores of mathScores) {
//   sum += mathScores;
// }
// avg = sum / mathScores.length;
// console.log(`합계: ${sum}, 평균: ${avg.toFixed(2)}`);
//---------------------------------------------------------------------------------------
//0보다 작은 수 중에 가장 첫번째 숫자를 결과로 나타내라
// let tn = [7, -24, -8, 10, 17, -18];
// let fn = null;
// for (let num of tn) {
//   if (num < 0) {
//     fn = num;
//     break;
//   }
// }
// console.log(`첫 번째 0보다 작은 수: ${fn}`);
//---------------------------------------------------------------------------------------
// //문제
//두 배열의 요소 값이 서로 값은 요소들로 새로운 배열을 생성
a = [12, 0, 2, 5, 4];
b = [0, 2, 3, 12, 8];
// let c = [];
// for (let i = 0; i < a.length; i++) {
//   if (b.includes(a[i])) {
//     c.push(a[i]);
//   }
// }
// console.log(`같은수: ${c}`);
// //풀이
// b.forEach((element) => {
//   if (a.includes(element)) {
//     c.push(element);
//   }
// });
// console.log(c);
//---------------------------------------------------------------------------------------
// 위 배열을 이용하여 실행결과 10,30,50 이다.
number2 = [1, 3, 5];
let c = number2.map((num) => num * 10);

console.log(c);

//풀이(같음)
//---------------------------------------------------------------------------------------
Map /Set

//set 중복되지 않는 유일한 값들의 집합이다.


// //배열의 각 요소에서 값을 풀어서 한번에 여러 변수에 저장하는 구조 해체 대입

// let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450]
// let jan, fab, mar, rest;
// [jan, fab, mar, ...rest] = carSales;

// //for... of 문을 사용하여 배열에서 요소를 하나씩 가져오기
// let sum = 0;
// for(let sale of carSales)
//     sum += sale;
// let average = sum / carSales.length;
// let roundedAverage = average.toFixed(2);

// //for ... of문과 entries() 메서드를 사용하여 배열에서 인덱스와 배열 요소 값을 한꺼번에 하나씩 가져올 수 있다.
// let sum = 0;
// for(let [index, sale] of carSales.entries()){
//     if(index % 2 == 0)
//         sum += sale; 
// }
// let average = sum / (carSales.length / 2);

// //for of 와 for in의 차이
// let list = [4, 5, 6];
// for(let i in list) {
//     console.log(i);
// }
// for(let i of list){
//     console.log(i);
// }

const car = {
    maker: "BMW",
    color: "red",
    year: "2012",
};
for (let prop in car){
    console.log(prop);
}


// // 배열 메서드 forEach()
// let sum = 0;
// carSales.forEach(sale => {sum += sale;});
// let average = sum / carSales.length;

// carSales.forEach((sale, index, array) => {array[index] = sale + 50});

// // 메서드 map() / forEach()와 비교
// let newCarSales = carSales.map(sale => sale + 50);

// //메서드 filter()
// let highSales = carSales.filter(sale => sale > 500) ;

// let evenSales = carSales.filter((sale, index) => index % 2 == 1);

// //find(), findIndex() 처음 찾은 요소와 처음 찾은 요소의 인덱스
// let firstSaleSix = carSales.find(sale => sale > 600);
// let firstSaleSixIndex = carSales.findIndex(sale => sale > 600);

// //every() 모든 배열 요소에 대한 조건연산에서의 결과 반환(true, false), 
// //some() 모든 배열 요소에서 하나라도 참 또는 거짓을 반환하는 경우 결과 반환(true, false)

// let allSaleSix = carSales.every(sale => sale > 600);
// let anySaleSix = carSales.some(sale => sale > 600);


// //reduce() 메서드는 배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고 하나의 결과값 반환
// let sum = carSales.reduce((t1, t2) => t1 + t2, 0);
// let average = sum / carSales.length;

// let highest = carSales.reduce((t1, t2) => (t1 > t2 ? t1: t2));

// //flat() 배열 요소에 다른 배열을 포함하고 있을 때 풀어준다.
// let flat = [1, [2, 3]].flat();


// //flatMap() 
// let message = ["오늘 날씨가", "좋습니다."]
// let words = message.flatMap(msg => msg.split(""));


// //map() + flat()
// let message = ["오늘 날씨가", "좋습니다."]
// let map = message.map(msg => msg.split(""));
// let words = map.flat();
// console.log(words);

// //concat() 두 개 이상의 배열을 병합하는 데 사용됩니다. 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);

// let original = [1, 2, 3];
// let newArray;
// newArray = original.concat(4, 5);
// newArray = original.concat([4, 5], [6, 7]);
// console.log(original);
// console.log(newArray);

// //push() 배열의 끝에 요소를 추가, pop() 배열 끝에 있는 요소를 꺼내와 반환하고 해당 요소를 배열에서 삭제
// let stack = [];
// stack.push(1);
// stack.push(2, 3);
// stack.pop();
// console.log(stack);
// stack.push(4);

// //unshift() 배열의 처음에 요소를 추가, shift() 배열의 처음에 있는 요소를 꺼내와 삭제
// let stack = [];
// stack.unshift(1);
// stack.unshift(2, 3);
// stack.shift();


// //slice() 배열을 잘라서 분할된 서브 배열을 반환
// let a = [1, 2, 3, 4, 5];
// let b = a.slice(0, 2);
// let c = a.slice(1, -1);


// // splice() slice와 유사하지만 원래의 배열을 변경시킨다.
// let a = [1, 2, 3, 4, 5]
// a.splice(0, 2);
// a.splice(2);
// a.splice(0, 2, 10, 20);
// a.splice(3, 0, 100, 200);
// console.log(a);

// // fill() 배열을 첫 번째 인수에 지정된 값으로 채운다.
// let a = new Array(5);
// a.fill(0);
// a.fill(1, 1);
// a.fill(1, 1, -1);


// // // indexOf() 인수값과 일치하는 맨 처음 요소의 인덱스를 반환
// let a = [0, 1, 2, 3, 2, 1, 0, NaN];
// let b = a.indexOf(2);
// let c = a.lastIndexOf(2);
// let d = a.indexOf(NaN);
// let e = a.indexOf(5);


// // includes() 인수에 지정된 값이 배열에 포함되어 있으면 true / 아니면 false

// let a = [0, true, 2, false, NaN];
// let b = a.includes(true);
// let c = a.includes(2);
// let d = a.includes(NaN);

// // sort() 배열을 정리할 때 사용, 알파벳 순으로 정렬한다.
// let a = ["apple", "cherry", "banana"];
// let b = a.sort();

// let c = [22, 333, 121];
// let d = c.sort();
// let e = c.sort((a, b) => a - b);

// // join() 배열의 모든 요소를 문자열로 뱐환하여 결합한 문자열을 반환
// let a = [1, 2, 3];
// let b = a.join();
// let c = a.join("")
// console.log(c);

// 다차원 배열
// let arr = new Array(2);
// for(let i = 0; i < arr.length; ++i)
//     arr[i] = new Array(3);
// console.log(arr);

// let arr = Array.from(new Array(2), () => new Array(3));


// //2차원 배열 접근

// arr[0][0] = 1;
// arr[0][1] = 2;
// arr[0][2] = 3;
// arr[1][0] = 4;
// arr[1][1] = 5;
// arr[1][2] = 6;
// console.table(arr);

 //for문을 사용하여 각 요소에 접근
// for(let i = 0; i < arr.length; ++1){
//     for(let j = 0; j < arr[i].length; ++1){
//         console.log(arr[i][j])
//     }
// }
// // forEach() 메서드를 사용하여 각 요소에 접근
// arr.forEach(r => r.forEach(c => console.log(c)));

// // push() 메서드를 사용하여 배열 끝에 요소를 추가
// arr.push([7, 8, 9]);

// // splice 메서드를 사용하여 첫 번째 인수 위치에 배열 추가
// arr.splice(2, 0, [10, 11, 12]);
// console.log(arr);