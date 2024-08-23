// function exam(a:string, b?:number, c = false){}
// exam('hello',123,true)
// exam('hello',123)
// exam('hello')

//함수 오버로딩
// function add(a:string, b: string):string;
// function add(a: number, b:number):number;
// function add(a: any, b:any):any{
//     return a + b;
// }

// add("hello", "world");
// add(1,1);

// function exam(param:string):string;
// function exam(param:string| null):number;
// function exam(param:string| null):string|number{
//     if(param){
//         return 'string'
//     }else{
//         return 123
//     }
// }
// const result = exam('what');

// //인터페이스 오버로딩
// interface Add{
//     (x:number, y:number):number
//     (x:string, y:string):string
// }
// const add: Add =(x:any, y: any) => x + y;
// add(1, 2);
// add('1','2');
// add('1',2);

// type Add1 =(x:number, y:number) => number;
// type Add2 =(x:string, y:string) => string;
// type Add = Add1 & Add2;
// const add: Add = (x: any, y: any) => x + y;

// add(1,2);
// add('1','2');
// add(1,'2');

// function sayS(word: string): string;
// function sayS(word: string[]):string;
// function sayS(word: any):any{
//     if(typeof word === 'string'){
//         return word;
//     }else if(Array.isArray(word)){
//         return word.join("");
//     }
//     throw new Error("error")
// }
// sayS(['hello','world']);

//enum 여러상수를 나열하는 목적
// enum Level {
//     NOVICE=3, INTERMEDIATE,ADVANCED=8,MASTER,
// }
// enum Level {
//     NOVICE, INTERMEDIATE='hello',ADVANCED='world',MASTER='korea',
// }
// const a = Level.NOVICE
// const b = Level[Level.NOVICE]
// enum Level {
//     NOVICE, INTERMEDIATE,ADVANCED,MASTER,
// }
// function yourLevel(level:Level){
//     console.log(Level[level])
// }
// const mylevel = Level.ADVANCED;
// yourLevel(mylevel);

//infer 조건부 타입 내에서 타입 추론 기능을 높일 때 사용

// type El<T> = T extends(infer E) ? E: never;
// type Str = El<string[]>
// type NumBool = El<(number | boolean)[]>

// type ElementType<T> = T extends (infer E)[] ? E : never;
// type numArray = number[];
// type Ele = ElementType<numArray>

//재귀 타입 (자기자신을 타입으로 다시 사용)

// type Rec ={
//     name:string;
//     children: Rec[];
// }
// const rec1: Rec ={
//     name:'test',
//     children:[],
// }
// const rec2: Rec ={
//     name:'test',
//     children:[{name:'test',children:[]}],
// }

// 문제 removeD 메서드를 구현하세요. 이메서드는 배열의 중복된 요소를 제거하고
// ,중복이 제거된 새로운 배열을 반환해야 합니다. 제네릭을 사용하여 다양한 타입의
// 배열에 대해 작동할 수 있도록 만드세요

// function removeD<T>(arr: T[]): T[] {
//     return Array.from(new Set(arr));
// }

// function removeD<T>(arr:T[]): T[]{
//  return Array.from (new Set(arr));
// }

//배열의 길이를 반환하거나, 문자열 길이를 반환하는 오버로딩 함수를 작성
// function length1(a: string): number;
// function length1<T>(a:any[]): number;
// function length1(a: any): number {
//     return a.length;
// }

//클래스
// class Person{
//     name:string; age:number; married:boolean;
//     constructor(≈){
//         this.name =name;
//         this.age =age;
//         this.married =married;
//     }
// }

// interface Human {
//     name:string; age:number; married:boolean;
// }
// class Person implements Human{
// name; age; married;
// constructor(name:string, age:number, married:boolean){
//     this.name =name;
//     this.age =age;
//     this.married =married;
// }
// }

// class Person{
//     name?:string; readonly age:number; protected married:boolean; private value:number; 
//     //readonly:읽기 전용 속성,protected:보호된 속성, private:개인 속성
//     constructor(name:string, age:number, married:boolean){
//     this.name =name;
//     this.age =age;
//     this.married =married;
//     this.value = 0
// }
// changAge(age:number){
//     this.age =age;
// }
// }
// class Child extends Person{
//     constructor(name:string, age:number, married:boolean){
//         super(name,age,married)
//     }
//     sayName(){
//         console.log(this.name);
        
//     }
//     sayMarriede(){
//         console.log(this.married);
        
//     }
//     sayValue(){
//         console.log(this.value);
        
//     }

// }


// 해결방법
// const child = new Child('Park',25,false)
// child.name;
// child.married;
// child.velue;

// class Person {
//     name?: string;          // 선택적 속성, public
//     readonly age: number;   // 읽기 전용 속성, public
//     protected married: boolean;  // 보호된 속성, 서브클래스에서 접근 가능
//     protected value: number;     // 보호된 속성, 서브클래스에서 접근 가능

//     constructor(name: string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//         this.value = 0;
//     }

//     // age는 readonly이기 때문에 changAge 메서드는 사용할 수 없습니다.
//     // readonly를 제거하거나 메서드를 없애야 합니다.
//     /*
//     changAge(age: number) {
//         this.age = age;
//     }
//     */

//     // value에 접근할 수 있는 메서드
//     getValue(): number {
//         return this.value;
//     }
// }

// class Child extends Person {
//     constructor(name: string, age: number, married: boolean) {
//         super(name, age, married);
//     }

//     // name이 정의되어 있는지 확인하고 출력하는 메서드
//     sayName() {
//         if (this.name) {
//             console.log(this.name);
//         } else {
//             console.log("Name is not defined");
//         }
//     }

//     // protected 속성 married에 접근하여 출력하는 메서드
//     sayMarried() {
//         console.log(this.married);
//     }

//     // protected 속성 value에 접근하여 출력하는 메서드
//     sayValue() {
//         console.log(this.getValue());
//     }
// }

// const child = new Child('Park', 25, false);

// child.sayName();       // 출력: Park
// child.sayMarried();    // 출력: false
// child.sayValue();      // 출력: 0

// console.log(child.name);     // 출력: Park (public이므로 접근 가능)
// console.log(child.age);      // 출력: 25 (public이므로 접근 가능)

// 다음 속성들은 클래스 외부에서 접근할 수 없습니다 (protected/private).
// console.log(child.married);  // 오류 발생
// console.log(child.value);    // 오류 발생

// interface Human {
//     name: string;
//     age: number;
//     married: boolean;
// }

// class Person implements Human {
//     name;
//     age;
//     married;

//     constructor(name: string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//     }
// }

//오버라이드
// class Human{
//     play(){
//         console.log('play');
        
//     }
//     study(){
//         console.log('study');
        
//     }
// }
// class Employee extends Human {
//     work(){
//         console.log('work');
        
//     }
//     //상속 관계인 부모 클래스와 자식 클래스 사이에서 부모 클래스의 메소드를 똑같이 가져와 사용하는 것
//     override study(){
//          console.log('study');    
//         }
//     }

// class Signature{
//     [propName: string]:string | number | undefined;
//     static[propName:string]:boolean
// }
// const sig = new Signature();
// sig.hello =123;
// Signature.isGood = false;

// class Person {
//     name: string;
//     age: number;
//     married: boolean;

//     constructor(name: string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//     }

//     sayMarried(this: Person) {
//         console.log(this.married);
//     }
//     sayCallback(callback:(this:this) => void){
//         callback.call(this)
//     }
// }

//추상 클래스 implements보다 조금 더 구체적임
// abstract class Person {
//     name: string;
//     age: number;
//     married: boolean;
//     value: number;

//     constructor(name: string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//         this.value = 0;
//     }

//     changeAge(age: number) {
//         this.age = age;
//     }

//     abstract sayAge(): void

//     abstract sayMarried(): void
// }


// class Person {
//     name: string;
//     age: number;
//     married: boolean;

//     constructor(name: string, age: number, married: boolean) {
//         this.name = name;
//         this.age = age;
//         this.married = married;
//     }
// }


// class RealPerson extends Person {
//     value =0;

//     // 추상 메서드 sayAge 구현
//     sayAge() {
//     }
//     // 추상 메서드 sayMarried 구현
//     sayMarried() {
//     }
// }


//문제 
//FirstElement라는 조건부 타입을 정의하세요 이 타입은 튜플을 인자로 받아 첫번째 요소의 타입을 추출해야한다.
//infor 키워드를 사용하여 이 타입을 구현하고 이를 사용해 튜플의 첫 번째 요소타입을 추출하는 예제 작성해라
// type FirstElement<T extends any[]> = T extends [infer First, ...any[]] ? First : never;
// type Tuple1 = [string, number, boolean];
// type Tuple2 = [boolean, number];

// //문제
// class Animal {
//     private name: string;
//     protected age: number;

//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }

//     getName(): string {
//         return this.name;
//     }

//     getAge(): number {
//         return this.age;
//     }
// }
// class Dog extends Animal {
//     breed: string;

//     constructor(name: string, age: number, breed: string) {
//         super(name, age); 
//         this.breed = breed;
//     }

//     bark(): string {
//         return "Woof!";
//     }
// }


//Partal
// interface Address{
//     email:string;
//     address:string;
// }
// const me:Partial<Address>={};
// const you:Partial<Address> = {email:'asd@asdd.com'}
// const all:Partial<Address> = {email:'asd@asdd.com', address:'asd'}


//Pick
// type Todo = {
//     title: string;
//     description: string;
//     completed: boolean;
// };
// type TodoPreview = Pick<Todo, "title" | "completed">;

// const todo: TodoPreview = {
//     title: 'clean',
//     completed: false
// };

//Omit
// interface Todo {
//     title: string;
//     description: string;
//     completed: boolean;
// };
// type TodoPreview = Omit<Todo, "description">;

// const todo: TodoPreview = {
//     title: 'clean',
//     completed: false
// };

//Required
// type User = {
//     firstName: string;
//     lastName: string;
// };
// let firstUser: User = {
//     firstName: "mingss",
//     lastName: "Lee"  
// };
// let secondUser: Required<User> = {
//     firstName: "mingss",  
//     lastName: "kim"
// };

// //record
// interface CatInfo{
//     age:number;
//     breed:string;
// }
// type CatName = "a"| "b" | "c"

// const cats: Record<CatName, CatInfo> ={
//     a:{age:10,breed:'B'},
//     b:{age:10,breed:'B'},
//     c:{age:10,breed:'B'},
// }

//ReturnType
type T0 = ReturnType<() => string>
type T1 = ReturnType<(s:string) => void>

function fn(str:string){
    return str;
}
const a : ReturnType<typeof fn> ='Hello'
// const b : ReturnType<typeof fn> =true;
const b: ReturnType<typeof fn> = "string";


//Mapped types
type Users = 'kim' | 'lee' | 'park';
type UserName = { [K in Users]: string };
const userNameInfo: UserName = {
    kim: 'kim',
    lee: 'lee',
    park: 'park',
};

// type Users = 'kim' | 'lee' | 'park';
type UserAge = { [K in Users]: number };
const userAgeInfo: UserAge = {
    kim: 10,
    lee: 20,
    park: 30,
};
