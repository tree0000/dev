//-------------------------------------------------------------------
//iterator&generator

//순회할 수 있는 객체
//배열,문자열,set,map
//for of문 사용가능
//스프래드 오퍼레이터(확산연산자)로 배열 초기화
//가변인수를 갖는 함수를 호출할 때 인수로 전달
//iterator&generator
//비동기 프로그래밍 및 메모리 관리에서 유용하다
//iterator - 데이터 구조를 순회할 수 있는 방법과 필요한 만큼 데이터 처리
//이터레이션 결과를 반환하는 next() 메서드
//결과는 done&value 속성을 갖는다
//done 아직 순회 할 수 있는 요소가 남아 있는지 여부
//value 요소가 남아있다면 어떤요소인지

//iterator
// let arr = [1, 2, 3, 4, 5];
// let iterator = arr[Symbol.iterator]();

// console.log(iterator);

// let result = iterator.next();
// console.log(result);

// while (!result.done) {
//   console.log(result.value);
//   result = iterator.next();
// }

// let copy = [...iterator];
// console.log(copy);

//class
// class Sequence {
//   constructor(from = 0, to = Infinity, interval = 1) {
//     this.from = from;
//     this.to = to;
//     this.interval = interval;
//   }
//   [Symbol.iterator]() {
//     let next = this.from;
//     return {
//       next: () => {
//         if (next <= this.to) {
//           let result = { value: next, done: false };
//           next += this.interval;
//           return result;
//         }
//         return { value: undefined, done: true };
//       },
//     };
//   }
// }

// let eveNumbers = new Sequence(2, 10, 2);
// let iterator = eveNumbers[Symbol.iterator]();
// let result = iterator.next();

// console.log(result);

// while (!result.done) {
//   console.log(result.value);
//   result = iterator.next();
// }

// for (let num of eveNumbers) {
//   if (num > 7) break;
//   console.log(num);
// }
