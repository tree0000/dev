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
[1, 2, 3].forEach(function(){
    console.log(this);
    
},{a: 'b'})
interface Array<T>{
    myForEach<K = Window>(callback: (this: K, i: T, a:T[]) => void): void;
}