
// interface Person{
//     name:string,
//     age:number,
//     married:boolean
// }


// const person1: Person={
//     name: "kim",
//     age:28,
//     married:false
// }

// interface Func {
//     (x:number,y:number):number
// }

// const add: Func =(x,y) => x + y

// interface Arr {
//     length: number,
//     [key: number]:string;
// }

// const arr:Arr=['1','2','3']

// const obj ={}
// obj[123] = '숫자키';


// interface NoProp{}
// const obj2 ={
//     txt:'에러안남',
// }
// const result:NoProp ="안녕"
// const result2:NoProp = null

// interface Animal {
//     name: string;
// }

// type Bear = Animal&{
//     honey: boolean;
// }
// interface Bear extends Animal{

// }

// const bear1: Bear = {
//     name: 'bear',
//     honey: true
// }
  
// type Animal ={
//     name: string;
// }
// interface Bear extends Animal{
//     honey: boolean;
// }
// interface Tiger extends Animal{
//     stripe: boolean;
// }
// interface BearTiger extends Bear, Tiger{}

// type honey = BearTiger['honey'];

// type stripe = BearTiger['stripe']

// const bear1:Bear ={
//     name:'bear',
//     honey:true
// }


// interface Merge{
//     one:string,
//     two:string,
// }

// interface Mearge2 extends Merge{
//     one:'h'| 'w';
//     two:'123';
// }

//문제
//name라는 타입 별칭을 만들어 문자열 타입을 나타내도록 하세요 
// type Name = string;
// let firstName: Name ='park'
// let LastName: Name ='kim'

//두개의 숫자를 받아 숫자를 반환하는 함수 타입을 정의하는것을 나타내시오
// type MathO =(x:number,y:number) => number;

// const add: MathO =(x,y) =>{
//     return x+y;
// }
// const multiply: MathO = (x, y) => {
//     return x * y;
// };

//
// interface Shape {
//     color: string;
// }

// interface Circle extends Shape {
//     radius: number;
// }

// const circle: Circle = {
//     color: "red",
//     radius: 10
// };

// interface Animal{
//     name:string;
//     age:number;
// }

// interface Dog extends Animal{
//     breed:string
// }

// const dog:Dog ={
//     name: "bobo",
//     age:3,
//     breed:"boby"
// }

//namespace

// namespace Exam{
//     export interface Inner{
//         test:string;
//     }
//     export type test2 = number
// }
// const ex1:Exam.Inner = {
//     test:'hello'
// }
// const ex2: Exam.test2 =123;

//옵셔널 ?/readonly
//옵셔널: 해당 속성이 있어도되고 없어도 된다 옵셔널인 경우undefined 허용
//readonly:값을 읽는것만 가능하고 변경x

// interface Exam {
//     hello:string;
//     world:number;
//     readonly check: boolean;
//     multiply?:symbol;
// }
// const example: Exam ={
//     hello:'h1',
//     world:123,
//     check:true,
// }
// example.check =false;


// const obj = {
//     hello:'world',
//     name:'park',
//     age:28
// }
// type Keys = keyof typeof obj;
// type Values = typeof obj[Keys]

//인덱스 접근 스타일
//튜플과 배열 인덱스 접근 타입 사용가능

// type Arr =[1,2,3];
// type Fisrt =Arr[0];
// type Length = Arr['length']
// type Arr2 = (string|boolean)[]
// type El = Arr2[number]

//매핑된 객체 타입
//새로운 객체속성을 만들어내는것
//인터스체이스에서는 사용x
 
// type HelloHi ={
//     [key in 'hello' | 'h1']:string;
// }
//in 연산자 오른쪽에는 유니언 타입이 와야한다.

//매핑된 객체 타입
// type Tuple =[1,2,3]
// type CopyTuple ={
//     [key in keyof Tuple]: Tuple[key];
// }

// type Arr = number[];
// type CopyArr ={
//     [key in keyofArr]:Arr[key];
// }
// const CopyTuple: CopyTuple = [1,2,3]


//집합 
//좁은타입에서 넓은 타입으로 대입

// type A = string |boolean;
// type B = boolean | number;
// type C = A & B;
// type F = unknown | {};
// type G = never &{};

// //예외
// type H = {a:'b'} & number;
// type I = null & {a:'b'};
// type J ={} & string;


//객체 간 대입
//튜플은 배열보다 좁은 타입
//배열은 튜플에 대입x
//배열이나 튜플에는 readonly 수식어를 붙일 수 있다.

// let a: ['h1','readonly'] = ['h1','readonly'];
// let a:readonly string[] = ['h1','readonly'];
// let b: string[] = ['h1', 'normal']

// a=b;
// b=a;

//두 객체가 있고 속성이 동일할 때, 속성이 옵셔널인 객체가 옵셔널이지 않은 객체보다 더 넓은 타입이다.

// type Optional ={
//     a:string;
//     b:string;
// }
// type Essential ={
//     a:string;
//     b:string;
// }
// const o: Optional ={
//     a:'hello',
// }
// const e: Optional ={
//     a:'hello',
//     b:'world',
// }
// const o2: Optional =e;
// const e2: Optional =o;

//구조적 타이핑
//모든 속성이 동일하면 타입이름이 다르더라도 동일한 타입으로 본다.

// interface Money {
//     _type:'money'
//     amount: number,
//     unit:string
// }
// interface Liter {
//     amount: number,
//     unit:string
// }

// const liter: Liter ={amount:1,unit:'liter'}
// const circle2: Money = liter;

//문제
// interface Product{
//     name:string;
//     price:number;
//     description:string;
// }
// const product1:Product={
//     name:"ss",
//     price:1,
//     description:"a",
// }
// const product2:Product={
//     name:"aa",
//     price:2,
//     description:"b",
// }

// interface Dictionary {
//     [key: string]:string
// }
// const dictionary:Dictionary ={
//     "a":"b",
//     "cc":"d"
// };
// dictionary["zz"]="a"

//제네릭 (<>표기법)


// interface Person<T,A>{
//     type: "human";
//     rece:'yellow';
//     name:T;
//     age:A;
// }

// interface Park extends Person<'Park',28>{}
// interface Kim extends Person<'Kim',28>{}

// interface Array<T>{
//     [key:number]:T,
//     length:number,
// }

// const number: Array<number>=[1,2,3,4,5]
// console.log(number,length);
// console.log(number[0]);
// console.log(number[2]);


// const personFactoryE = <N,A> (name:A,age:A) =>({
//     type: "human",
//     rece:'yellow',
//     name,
//     age,
// })


// interface PersonI<N,A>{
//      type: "human";
//      rece:'yellow';
//      name:N,
//      age:A,
// }
// interface PersonT<N,A>{
//      type: "human";
//      rece:'yellow';
//      name:N,
//      age:A,
// }
// type Kim = PersonI<'kim',28>
// interface Lee extends PersonT<'lee',11>{}

// class Person<N,A>{
//     name:N;
//     age:A;
//     constructor(name:N,age:A){
//         this.name=name;
//         this.age=age;
//     }
//     method<B>(peram:B){
        
//     } 
// }


// interface PersonI<N = string, A = number> {
//     type: "human";
//     rece: 'yellow';
//     name: N;
//     age: A;
// }


// type Person1 = Person; 
// type Person2 = Person<number>; 
// type Person3 = Person<number, boolean>; 

// interface PersonI<N = string, A = number> {
//     type: "human";
//     rece: 'yellow';
//     name: N;
//     age: A;
// }


// const personE = <N, A = unknown>(name: N, age: A): PersonI<N, A> => ({
//     type: "human",
//     rece: 'yellow',
//     name,
//     age,
// });


// const names = personE('kim', 28); 

// function values<T>(initial:T[]){
//     return{
//         hsaValue(values: T){
//             return initial.includes(values)
//         }
//     }
// }
// const savedValues = values(['a','b','c'])

//컨디셔널 타입(삼항연산자)
// type A1 = string;
// type B1 = A1 extends string ? number : boolean;
// type A2 = number;
// type B2 = A2 extends string ? number : boolean;

// interface X {
//     x: number;

// }
// interface XY{
//     x: number,
//     y: number,
// }
// interface TX extends X {
//     y: number
// }
// type A = XY extends X ? string : number;
// type b = XY extends X ? string : number;


// type result = [1] extends [] ? true : false
// type Start = string | number;
// type New = Start extends string | number ? Start[] : never
// let n: New = ['hi']
// n=[123];

// type New<A> = A extends string | number ? string[] : never;
// type New<A> = A extends string ? string[] : never;
// type Never = New<number>
// type Arr = New<string>

//문제 
//배열의 첫 번째 요소를 반환하는 제네릭 함수를 작성하세요
// function First<T>(array: T[]): T {
//     return array[0];
// }
// console.log(First([1,2,3]));



//length 속성을 가진 객체만을 받는 제네릭 함수를 작성하세요 
interface Length{
length: number;
}

function le<T extends {length: number}>(item:T){
    console.log(item.length);
    
}
le('hello')

//두 값을 받아서 그 중 큰 값을 반환하는 제네릭 함수를 작성 해라

function TMax<T>(a:T,b:T):T{
    return a > b ? a : b ;
}
const maxNumber = TMax(10, 20);

//IsString을 구현하고 T가 스트링 타입이라면 true 아니면 false
// type IsString<T> = T extends string ? true : false;
// type Test1 = IsString<string>
// type Test2 = IsString<number>



// T가 유니온 타입일 경우 string 타입만 요소 추출
type StringS<T> = T extends string ? T : never;
type Test1 = StringS<string| boolean | number>