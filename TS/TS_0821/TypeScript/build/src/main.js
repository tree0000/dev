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
// const add =function (a:number,b:number):number {
//     return a + b
// }
// function add2(a:number,b:number):number {
//     return a + b
// }
// const result1 = add2(1, 2);
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
// const obj = {name:"park"} ;
// const arr = [1,2, 'three'] ;
// obj.name = 'lee'
// arr.push(4);
//배열타입
//[]를 붙인다.
// const arr1: string[] = ['1', '2', '3']
// const arr2: Array<number> = [1,2,3]
// const arr3 = [1,'3',3];
// const arr4 = [];
//tuple
//각요소 자리에 타입이 고정되어 있는 배열
// const tuple: [number, boolean, string] = [1,true,'hello'];
// tuple[0] =3;
// tuple[2] = 'world';
// tuple.push('hello');
// console.log(tuple);
// const strNumRools : [string, number, ...boolean[]] = ['hello',1,2,3];
// const [a, ...rest] = ['hello',1,2,3];
// const[b, ...rest] = [string, ...number[]] =['hello',1,2,3];
/*
타입으로 사용가능&불가능
리터널 값은 사용가능
변수이름은 사용불가능
함수 호출은 사용불가능
Date,Math,Error,String,Object,Boolean 같은 내장객체는 사용은 가능하나 (사용하지 않는것이 좋음)
*/
// function add(x: number, y:number){
//     return x + y;
// }
// const str1: String = 'hello'
// const str2: String = str1;
// function add(x:number, y:number){return x + y}
// const result1: add = add(1, 2);
// const result2:typeof = add(1, 2);
// const add2: typeof add = (x:number, y:number)=> x + y;
//유니언 타입
// let strNum: string | number = 'hello'
// strNum =1;
// const arr =[1,'2',3]
// function unionType(value: String | number): number{
//     if(typeof value === 'string'){
//         return parseInt(value);
//     }
//     return value;
// }
// unionType(1);
// unionType('1');
//any타입 (타입스크립트에서 지양해야 할 타입)
//타입검사를 포기한다는 선언과 같다
//타입스크립트가 any로 추론하는 타입이 있다면 타입을 직접 표기 해야한다. 
// const arr: string [] = [];
// const arr =[];
// arr.push('1');
// arr;
// arr.push(3);
// arr;
// const a:any = '123'
// const any1 = a + 1;
// const any2 = a - 1;
// const any3 = a * 1;
// const any4 = a + '1';
// const any5 = a / 1;
//any를 없애기위해 찾아줘야한다.
// fetch('url').then< {data:String} >((response) =>{
//     return response.json();
// }).then((result) =>{
// })
// const result:{hello:String} = JSON.parse('{"hello" : "json"}')
//unknown
//any와 비슷하게 모든 타입에 대입가능(그 후 어떠한 동작도 할 수 없다 개부분 try catch문에서보임)
//as로 타입 주장을 해야함
// try{
// }catch(e){
//     const error = e as Error;
//     console.log(error.message);
// }
//void 함수 반환값이 없는경우에는 반환값이 void로 추론
// let username: string = "kim";
// function add(a:number, b:number):number{
//     return a + b;
// }
// function isEven(num:number):boolean{
//     return num %2 ===0;
// }
