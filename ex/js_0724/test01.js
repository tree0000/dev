
//  const pet = {
//     name: '구름',
//     eat: function (food) { 
//       alert(this.name + '은/는 ' + food + '을/를 먹습니다.')
//     }
//   }
//   pet.eat('밥')

// const student ={}
// student.name ='park'
// student.hobby ='독서'
// student.dream ='백수'
// console.log(JSON.stringify(student,null,2));

//동적으로 객체 속성 추가/제거
//delete

const student ={}
student.name ='park'
student.hobby ='독서'
student.dream ='백수'

delete student.hobby

console.log(JSON.stringify(student,null,2));

