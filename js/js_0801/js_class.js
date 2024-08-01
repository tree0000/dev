//person이라는 클래스를 만들고 안녕하세요.
//제 이름은 {이름} 이고 나이는 {나이}살 입니다.이라는문자열 반환
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   index() {
//     return `이름:${this.name} 나이:${this.age}.`;
//   }
// }
// const person = new Person("박우현", 22);
// console.log(person.index());
//---------------------------------------------------------------------------------------
// Calculator이라는 클래스 또는 생성자 함수를 작성하고
// 정적메서드를 추가하여 수를 더하고 빼는것을 구현
// class Calculator {
//   static a(a, b) {
//     return a + b;
//   }
//   static b(a, b) {
//     return a - b;
//   }
// }
// const sum = Calculator.a(5, 3);
// const dif = Calculator.b(5, 3);

// console.log(`더하기: ${sum}`);
// console.log(`빼기: ${dif}`);
//---------------------------------------------------------------------------------------
// //강사님풀이
// class Calculator {
//   static add(a, b) {
//     return a + b;
//   }
//   static subtract(a, b) {
//     return a - b;
//   }
// }
// console.log(Calculator.add(1, 3));
// console.log(Calculator.subtract(1, 3));
//---------------------------------------------------------------------------------------
// function Calculator() {}
// Calculator.add = function (a, b) {
//   return a + b;
// };
// Calculator.subtract = function (a, b) {
//   return a - b;
// };
// console.log(Calculator.add(5, 3));
// console.log(Calculator.subtract(2, 3));
//---------------------------------------------------------------------------------------
