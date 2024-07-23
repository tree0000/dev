// let number =10;
// number++ //전위증감( 1증가된 값이 연산결과값)
// ++number // 후위증감(1증가하기 전 값이 연산결과)
// console.log(number);

// let number =10;

// console.log(number++);
// console.log(++number);
// console.log(number--);
// console.log(--number);

// const input =confirm('')

//숫자 자료향으로 변환

// 12

// const rawInput =prompt('inch 단위의 숫자를 입력')
// const inch = Number(rawInput)
// const cm =inch*2.54

// console.log(`${inch}inch는 ${cm}cm 입니다`);

//조건문

//불 표현식의 값이 true 면 중괄호 안의 문장 실행 false 무시
// if()
// if(){}else{}

// const str = 5;
// for(let i =1; i<=str; i++){
//     let stars ="";
//     for(let j =1; j<= i; j++){
//         stars =stars + "*";
//     }
//     console.log(stars);
// }

// for(let i =1; i<=str; i++){
//     let stars ="";
//     for(let j =1; j<= str-i; j++){
//         stars =stars + " ";
//     }
//     for(let j =1; j<= i*2-1; j++){
//         stars =stars + "*";
//     }
//     console.log(stars);
// }

// const input =Number(prompt('숫자입력','숫자'))
// switch (input%2) {
//     case 0:
//         console.log("짝수");
//         break;
//     case 1:
//         console.log("홀수");
//     default:
//         console.log("숫자아님");
//         break;
// }


// const score = Number(prompt('학점을 입력해주세요.', '학점'))
// if (score === 4.5) {
//     alert('신')
// } else if (4.2 <= score && score < 4.5) {
//     alert('교수님의 사랑')
// } else if (3.5 <= score && score < 4.2) {
//     alert('현 체제의 수호자')
// } else if (2.8 <= score && score < 3.5) {
//     alert('일반인')
// } else if (2.3 <= score && score < 2.8) {
//     alert('일탈을 꿈꾸는 소시민')
// } else if (1.75 <= score && score < 2.3) {
//     alert('오락문화의 선구자')
// } else if (1.0 <= score && score < 1.75) {
//     alert('불가촉천민')
// } else if (0.5 <= score && score < 1.0) {
//     alert('자벌레')
// } else if (0 < score && score < 0.5) {
//     alert('플랑크톤')
// } else {
//     alert('시대를 앞서가는 혁명의 씨앗');
// }


// const rawInput = prompt('태어난 해를 입력해주세요.', '')
// const year = Number(rawInput)
// const e = year % 12

// let result
// if (e === 0) { result = '원숭이' }
// else if (e === 1) { result = '닭' }
// else if (e === 2) { result = '개' }
// else if (e === 3) { result = '돼지' }
// else if (e === 4) { result = '쥐' }
// else if (e === 5) { result = '소' }
// else if (e === 6) { result = '호랑이' }
// else if (e === 7) { result = '토끼' }
// else if (e === 8) { result = '용' }
// else if (e === 9) { result = '뱀' }
// else if (e === 10) { result = '말' }
// else if (e === 11) { result = '양' }
// alert(`${year}년에 태어났다면 ${result}띠입니다.`)

// const rawInput = prompt('태어난 해를 입력해주세요.', '')
// const year = Number(rawInput)
// const tti = '원숭이,닭,개,돼지,쥐,소,호랑이,토끼,용,뱀,말,양'.split(',')

// alert(`${year}년에 태어났다면 ${tti[year % 12]} 띠입니다.`)


// result = (year)=>{
//     let result ='true'
//     if(year% 400 ==0){
//         result ="true";
//     }else{
//         if(year% 100 ==0){
//             result ="false";
//         }else{

//         }if(year % 4 ==0){
//             result ="true";
//         }else{
//             result ="false";
//         }
//     }
//     return result;
// }

 const str = 5;
// //별 1
// for(let i = 1; i <= str; i++){
// 	console.log("*")
// }
// //별2
// for(let i = 1; i <= str; i++){
//     let stars ="";
// 	console.log("*")
// }
// //별3
// for (let i = 0; i < 5; i++) {
//     console.log("*")
    
// }




// for(let i =1; i<=str; i++){
//     let stars ="";
//     for(let j =1; j<= i; j++){
//         stars =stars + "*";
//     }
//     console.log(stars);
// }

// for(let i =1; i<=str; i++){
//     let stars ="";
//     for(let j =1; j<= i; j++){
//         stars = stars + "*";
//     }
//     console.log(stars);
// }


// const todos =['우유구매','두부구매','딸기구매']
// todos.push('저녁식사준비')
// todos.push('피아노 연습')
// todos.push('우유구매')
// console.log(todos);


// //-인덱스 뒷부분에 요소 추가
// const itemsA = ['사과','배','바나나']
// itemsA.splice(2,1)
// console.log(itemsA);

// const todos =['우유구매','두부구매','딸기구매']
// for (let i = 0;  i>= todos.length; i++) {
//     console.log(`${i}번째할일:${todos[i]}`)
//     }

// for (let i = todos.length-1; i>= 0; i--) {
//     console.log(`${i}번째할일:${todos[i]}`)
//     }

// let i =0
// while (condition) {
//     console.log(`${i}번째반복`);
// i = i+1
// }

// let output =0
// for (let i = 0; i <= 10; i++) {
//     if( i%2 === 1){
//         continue
//     }
//     output+=i
// }
// console.log(output);


// let output =''

// //i 15개 까지반복
// for(let i =1; i<15; i++){
//     for(let j =15; j>i; j--){
//         output +=''
//     }
//     for (let k = 0; k < 2*i-1; k++) {
//         output +='*'
//     }
//     output+='\n'
// }
// console.log(output);

//함수
//선언적 함수


// function sumAll(a, b){
//     let output =0
//     for (let i = 0; i < b; i++) {
//         output += i
//     }
//     return output
// }
// console.log(`1부터 100까지의 합:${sumAll(1,100)}`);
// console.log(`1부터 100까지의 합:${sumAll(1,500)}`);
// //

// function min(array) {
//     let output = array[0]
//     for(const item of array){
//         if(output>item){
//             output =item
//         }
//     }
//     return output
// }
// const testArray = [52,273,32,103,275,24,57]
// console.log(`${testArray}중에서`)
// console.log(`최솟값 = ${min(testArray)}`)


// function earnings(name,wage=8590,hours=40) {
//     console.log(`#${name}님의 급여 정보`);
//     console.log(`-시급:${wage}원`);
//     console.log(`-근무시간:${hours}시간`);
//     console.log(`급여:${wage*hours}원`);
//     console.log('');
// }
// earnings('구름')
// earnings('별',10000)
// earnings('인성',10000,52)

//콜백함수

// const numbers =[273,52,103,32,57]
// numbers.forEach(function(value,index,array){
//     console.log(`${index}번째요소:${value}`)
// })


// let numbers =[273,52,103,32,57]
// numbers =numbers.map(function(value,index,array){
//     return value * value
// })
// numbers.forEach(console.log)

// const numbers = [0,1,2,3,4,5]
// //필터로 짝수를 셀렉
// const eventNumbers = numbers.filter(function(value){
//     return value % 2 === 0
// })
//     console.log(`원래:${numbers}`);
//     console.log(`짝수:${eventNumbers}`);

// let numbers = [0,1,2,3,4,5,6,7,8,9]
// numbers
// .filter((value)=> value % 2 === 0)
// .map((value)=> value *value)
// .forEach((value)=>{
//     console.log(value);
// })

//블록을 사용한 스코프 생성
// let pi =3.14
// console.log(`파이값:${pi}`);
// {
//     let pi =3.141592
//     console.log(`파이값:${pi}`);
// }
console.log(`파이값:${pi}`);

//함수블록을 사용한 스코프
// function sample(){
//     let pi =3.141592
//     console.log(`파이값:${pi}`);
// }
// sample()
// console.log(`파이값:${pi}`);
