//클래스
// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype ={
//     toString:function(){
//         return `(${this.x},${this.y})`
//     }
// }
// let pt1 = new Point(10,20);
// let pt2 = new Point(100,200);
// console.log(pt1.toString());
// console.log(pt2.toString());

// console.log(pt1 instanceof Point);
// console.log(pt2 instanceof Point);

// function Circle(radius) {
//   this.radius = radius;
// }
// Circle.prototype.getArea = function () {
//   return Math.PI * this.radius ** 2;
// };

// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea);

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     console.log(`Hi${this.name}`);
//   }
//   static sayHello() {
//     console.log("Hello");
//   }
// }
// const me = new Person("Lee");
// me.sayHi();
// Person.sayHello();

// const Person = (function () {
//   function Person(name) {
//     this.name = name;
//   }

//   Person.prototype.sayHi = function () {
//     console.log("Hi " + this.name);
//   };

//   Person.sayHello = function () {
//     console.log("Hello!");
//   };

//   return Person;
// })();

// const me = new Person("Lee");
// console.log(me.name);
// me.sayHi();
// Person.sayHello();

//메서드

// class Square {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   area() {
//     return this.width * this.height;
//   }
//   static areas(width,height){
//     return width * height
//   }
// }

// const square = new Square(10, 10);
// console.log(square.area());
// console.log(Square.areas(20,10));

// const Person = {
//   firstName: "Minji",
//   lastName: "Choi",
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   set fullName(name) {
//     [this.firstName, this.lastName] = name.split(" ");
//   },
// };

// console.log(Person.fullName);

//public /private

// class Person {
//   #name = "";

//   constructor(name) {
//     this.#name = name;
//   }

//   get name() {
//     return this.#name.trim();
//   }
// }

// const me = new Person("Lee");
// console.log(me.name);

//상속에 대한 확장
//super 함수처럼 호출가능하고 this같이 식별자 처럼 참조가능
// class Vehicle {
//   constructor(name, wheel) {
//     this.name = name;
//     this.wheel = wheel;
//   }
// }
// const myVehicle = new Vehicle("자전거", 2);
// console.log(myVehicle);

// class Bicycle extends Vehicle {
//   constructor(name, wheel) {
//     super(name, wheel);
//   }
// }
// const myBicycle = new Bicycle("오토바이", 2);
// console.log(myBicycle);

// class Car extends Vehicle {
//   constructor(name, wheel, license) {
//     super(name, wheel);
//     this.license = license;
//   }
// }
// const myCar = new Car("벤츠", 4, true);
// console.log(myCar);

// class Base {
//   constructor(name) {
//     this.name = name;
//   }
//   sayHi() {
//     return `Hi${this.name}. 잘지내니?`;
//   }
// }
// class Derived extends Base {
//   sayHi() {
//     return `${super.sayHi()}`; //sayHi호출
//   }
// }
// const derived = new Derived("Lee");
// console.log(derived.sayHi());

//문제
//Book이라는 생성자 함수를 만들고 프로토타입을 이용하여 프로퍼티를 추가하고
//(title.author.price)생성할 프로토 타입 예) 출판일,페이지 수
class Book {
  constructor(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
}
Book.prototype.bookDate = "";
Book.prototype.page = 200;

const myBook = new Book("책: 책", "목차", 250);
myBook.bookDate = "2024-07-31";
myBook.pageCount = 0;

console.log(
  `Book: ${myBook.title},${myBook.author},${myBook.price},${myBook.bookDate},${myBook.page}`
);
