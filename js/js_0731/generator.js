//generator 일련의 값을 생성하는 특별한 종류의 순회할 수 있는 객채
// 어떤연산의 결과로 생성된 값을 순회할때 유용
// function*  예약어로 정의

// const { log } = require("console");

// function* generator() {
//   console.log("제너레이터 실행");
//   console.log("1생성");
//   yield 1;
//   console.log("2생성");
//   yield 2;
//   console.log("3생성");
//   yield 3;
// }
// let gen = generator();
// let result = gen.next();
// result = gen.next();
// result = gen.next();
// console.log(gen);

//while,for of

// while (!result.done) {
//   console.log(result.value);
//   result = gen.next();
// }
// for (let ge of gen) {
//   console.log(gen);
// }
//[Symbol.iterator]
// function* sequence(from = 0, to = Infinity, interval = 1) {
//   let next = from;
//   while (next <= to) {
//     yield next;
//     next += interval;
//   }
// }

// let evenSeq = sequence(2, 10, 2);
// let iterator = evenSeq[Symbol.iterator]();
// console.log(iterator);

// for (let seq of evenSeq) {
//   console.log(seq);
// }

// class Sequence {
//   constructor(from = 0, to = Infinity, interval = 1) {
//     this.from = from;
//     this.to = to;
//     this.interval = interval;
//   }
//   *[Symbol.iterator]() {
//     let num = this.from;
//     while (num <= this.to) {
//       yield (num += this.interval);
//     }
//   }
// }

// for (const num of eveNumbers) {
//   console.log(num);
// }
// function* generateIterables(...iterables) {
//   for (let iterable of iterables) for (let item of iterable) yield item;
// }
// function* generateIterables(...iterables) {
//   for (let iterable of iterable) yield* iterable;
// }
// let eveNumbers = new Sequence(2, 10, 2);
// let generator = generateIterables("abc", [1, 2, 3]);
// let arr = [...generator];
// console.log(arr);


