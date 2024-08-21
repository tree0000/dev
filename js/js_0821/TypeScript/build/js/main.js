"use strict";
// const obj = {width:10,height:15};
// const area = obj.width * obj.height;
// console.log((area));
// console.log(4/[]);
/*
Type annotation
 틀리게 추론할 떄만 올바른 타입을 표기
Any 타입을 리턴하는경우
변수선언을 먼저하고 나중에 초기화 하는 경우
변수에 대입될 값이 일정치 못하는 경우
*/
/*
Type inference
어느정도 변수와 변환 값의 타입을 스스로 추론가능
*/
const add = function (a, b) {
    return a + b;
};
function add2(a, b) {
    return a + b;
}
const result1 = add2(1, 2);
// const str = 'hello'
// const num = 123;
// const bool = false;
// const n = null;
// const u = undefined;
// const sym =Symbol('sym');
// const obj = {hello: 'world'};
// let str = 'hello'
// let num = 123;
// let bool = false;
// let n = null;
// let u = undefined;
// let sym = Symbol('sym');
// let obj = {hello: 'world'};
const obj = { name: "park" };
const arr = [1, 2, 'three'];
obj.name = 'lee';
arr.push(4);
//배열타입
//[]를 붙인다.
const arr1 = ['1', '2', '3'];
const arr2 = [1, 2, 3];
const arr3 = [1, '3', 3];
//tuple
//각요소 자리에 타입이 고정되어 있는 배열
const tuple = [1, true, 'hello'];
tuple[0] = 3;
tuple[2] = 'world';
tuple.push('hello');
console.log(tuple);
