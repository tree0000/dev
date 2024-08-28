// [1, 2, 3].forEach(() => { });
// [1, 2, 3].forEach((v, i, a) => { console.log(v, i, a); });
// [1, 2, 3].forEach((v, i) => { console.log(v, i); });
// [1, 2, 3].forEach((v) => { console.log(3); });
// // ['1','2','3'].forEach((v)=>{
// //     console.log(v.slice(0));
// // })

// [true, 2, '3'].forEach((v)=>{
//     if(typeof v === 'string'){
//         v.slice(0);
//     }else{
//         v.toFixed();
//     }

// })
// [1, 2, 3].forEach(function(){
//     console.log(this);
    
// },{a: 'b'})
// interface Array<T>{
//     myForEach<K = Window>(callback: (this: K, i: T, a:T[]) => void): void;
// }

//map

// const r1 = [1, 2, 3].map(() => {});
// const r2 = [1, 2, 3].map((v, i, a) => v);
// const r3 = ['1', '2', '3'].map((v) => parseInt(v));
// const r4 = [{ num: 1 }, { num: 2 }, { num: 3 }].map(function (v) {
//     return v.num;
// });

// interface Array<T> {
//     myMap<R>(callback: (v: T, i: number, a: T[]) => R): R[];
// }

//filler

// const r1 = [1, 2, 3].filter((v): v is number => v < 2);
// const r1 = [1, 2, 3].filter((v) => v < 2);
// const r2 = [1, 2, 3].filter((v, i, a): v is never => false);
// const r3 = ['1', '2', '3'].filter((v): v is string => typeof v === 'string');
// const r4 = [{ num: 1 }, { num: 2 }, { num: 3 }].filter(function (v): v is { num: number } {
//     return v.num % 2 === 1;
// });

// interface Array<T> {
//     // myFilter<S extends T>(callback: (v: T, i: number, a: T[]) => v is S, thisArg?: any): S[];
//     // myFilter<S extends T>(callback: (v: T, i: number, a: T[]) => void, thisArg?: any): T[];
//     myFilter<S extends T>(callback: (v: T, i: number, a: T[]) => v is S, thisArg?: any): T[];
//     myFilter(callback: (v: T, i: number, a: T[]) => boolean, thisArg?: any): T[];
// }

//
const r1 = [1, 2, 3].reduce((a, c) => a + c);
const r2 = [1, 2, 3].reduce((a, c, i, arr) => a + c, 10);
const r3 = [{ num: 1 }, { num: 2 }, { num: 3 }].reduce(function (a, c) {
    return { ...a, [c.num]: 'hi' };}, {});
const r4 = [{ num: 1 }, { num: 2 }, { num: 3 }].reduce(function (a, c) {
 return a + c.num;
}, 0);
interface Array<T> {
myReduce<U>(callback: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
myReduce<U>(callback: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
}
//

