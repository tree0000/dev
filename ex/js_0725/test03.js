
// const students = []
// students.push({이름:'구름',국어:87,영어:98,수학:88,과학:90})
// students.push({이름:'별이',국어:92,영어:98,수학:96,과학:88})
// students.push({이름:'겨울',국어:76,영어:96,수학:94,과학:86})
// students.push({이름:'바다',국어:98,영어:52,수학:98,과학:92})
/*
let output ='이름\t총점\t평균\n'
for(const s of students){
  const sum =s.국어 + s.영어 + s.수학 +s.과학
  const avg =(sum/4).toFixed(2)
  output += `${s.이름}\t${sum}점\t${avg}점\n`
}
console.log(output);
*/

/*
getSumOf = (students) =>{
  return students.국어 + students.영어 + students.수학 + students.과학
}
 getAverageOf = (student)=> {
  return getSumOf(student) / 4
}
for (const s of students) {
  output += `${s.이름}\t${getSumOf(s)}점\t${getAverageOf(s)}점\n`
}
console.log(output)
*/

/*
for (const student of students) {
  student.getSum = function () {
    return this.국어 + this.영어 + this.수학 + this.과학
  }
  student.getAverage = function () {
    return this.getSum() / 4
  }
}
let output = '이름\t총점\t평균\n'
for (const s of students) {
  output += `${s.이름}\t${s.getSum()}점\t${s.getAverage()}점\n`
}
console.log(output)
*/

/*
//create로 이름,국어,영어,수학,과학 생성
function createStudent(이름, 국어, 영어, 수학, 과학) {
  return {
    이름:이름,
    국어:국어,
    영어:영어,
    수학:수학,
    과학:과학,
    getSum () {
      return this.국어 + this.영어 + this.수학 + this.과학
    },
    getAverage () {
      return this.getSum() / 4
    },
    toString () {
      return `${this.이름}\t${this.getSum()}점\t${this.getAverage()}점\n`
    }
  }
}
//push로 데이터 값 넣기
const students = []
students.push(createStudent('구름', 87, 98, 88, 90))
students.push(createStudent('별이', 92, 98, 96, 88))
students.push(createStudent('겨울', 76, 96, 94, 86))
students.push(createStudent('바다', 98, 52, 98, 92))
//출력하기
let output = '이름\t총점\t평균\n'
for (const s of students) {
  output += s.toString()
}
console.log(output)
*/
/*
class Student {

}
const student = new Student()

const students = [
  new Student(),
  new Student(),
  new Student(),
  new Student()
]
*/
/*
//Student(앞대문자)클래스 생성 
class Student {
  constructor (이름, 국어, 영어, 수학, 과학) {
    this.이름 = 이름
    this.국어 = 국어
    this.영어 = 영어
    this.수학 = 수학
    this.과학 = 과학
  }

getSum(){
  return this.국어+this.영어+this.수학+this.과학
}
getAverage(){
  return this.getSum()/4
}
toString(){
  return `${this.이름}\t${this.getSum()}점\t${this.getAverage()}점\n`
}
}
const students =[]
students.push(new Student('구름', 87, 98, 88, 90))
students.push(new Student('별이', 92, 98, 96, 88))
students.push(new Student('겨울', 76, 96, 94, 86))
students.push(new Student('바다', 98, 52, 98, 92))

let output = '이름\t총점\t평군\n'
for(const s of students){
  output += s.toString()
}
console.log(output);
*/

//클래스 선언(Rectangle)
/*
class Rectangle{
  constructor (width,height){
    this.width = width
    this.height = height
  }
  getPerimeter(){
    return 2 * (this.width + this.height)
  }
  getArea(){
    return this.width * this.height
  }
}

    class Square extends Rectangle{
      constructor (length){
        super(length,length)
      }
    }

const square = new Rectangle(10,20)
console.log(`둘레:${square.getPerimeter()}`);
console.log(`넓이:${square.getArea()}`);

*/