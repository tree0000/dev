//클래스 고급기능
/*
class Rectangle{
    constructor (width, height){
        this.width =width
        this.height =height
    }
    getPerimeter(){
        return 2 * (this.width + this.height)
    }
    getArea(){
        return this.width * this.height
    }
}

const rectangle = new Rectangle(10,20)
console.log(`사각형의 둘레: ${rectangle.getPerimeter()}`)
console.log(`사각형의 넓이: ${rectangle.getArea()}`)
*/
/*
class Square {
    constructor (length) {
      this.length = length
    }
    getPerimeter () { return 4 * this.length }
    getArea () { return this.length * this.length }
  }

  // 클래스 사용하기
  const square = new Square(-10)
  console.log(`정사각형의 둘레: ${square.getPerimeter()}`)
  console.log(`정사각형의 넓이: ${square.getArea()}`)
*/

/*
class Square {
    constructor (length) {
        if(length<=0){
            throw'길이는 0 보다 커야함.'
        }
        this.length =length
    }
    getPerimeter () { 
        return 4 * this.length }
    getArea () { 
        return this.length * this.length }
}

const square = new Square(-10)
console.log(`정사각형의 둘레: ${square.getPerimeter()}`)
console.log(`정사각형의 넓이: ${square.getArea()}`)

*/

/*
class Square {
    #length
    //private 속성 메소드: #을 붙여 차이점을 둠
    constructor (length) {
    if(length<=0){
        throw '길이는 0 보다 커야함.'
    }
    this.#length =length
}
getPerimeter(){
    return 4 * this.#length}

getArea(){
    return this.#length *this.#length
}
}
const square = new Square(10)
console.log(`정사각형의 둘레: ${square.getPerimeter()}`)
console.log(`정사각형의 넓이: ${square.getArea()}`)
*/

/*
class Square {
    #length
    constructor (length) {
    if(length<=0){
        throw '길이는 0 보다 커야함.'
    }
    this.#length = length
}
getPerimeter(){
    return 4 * this.#length}

getArea(){
    return this.#length *this.#length
}
}
const square = new Square(10)
square.length =-10 //클래스 내부의 length 속성을 변경 (음수의 제곱은 양수)
console.log(`정사각형의 둘레: ${square.getPerimeter()}`)
console.log(`정사각형의 넓이: ${square.getArea()}`)

*/

//getter(속성 값을 읽을 때 실행되는 메서드),setter(특정 속성 값을 설정할 때 실행되는 메서드 유효성 검사 실행)

/*
class Square {
    #length // 사각형의 한 변의 길이를 저장하는 private 필드
  
    // 생성자: 사각형의 길이를 초기화합니다
    constructor(length) {
      this.setLength(length) // 길이를 초기화할 때 setter 메서드를 사용합니다
    }
  
    // setter 메서드: 사각형의 길이를 설정합니다
    setLength(value) {
      if (value <= 0) { // 길이가 0보다 작거나 같으면
        throw '길이>0' // 에러를 발생시킵니다
      }
      this.#length = value // 유효한 값이면 길이를 설정합니다
    }
  
    // getter 메서드: 사각형의 길이를 반환합니다
    getLength() {
      return this.#length // 사각형의 길이를 반환합니다
    }
  
    // 사각형의 둘레를 계산하는 메서드
    getPerimeter() {
      return 4 * this.#length // 사각형의 둘레를 반환합니다
    }
  
    // 사각형의 넓이를 계산하는 메서드
    getArea() {
      return this.#length * this.#length // 사각형의 넓이를 반환합니다
    }
  }
  
  // 길이가 10인 새로운 Square 객체를 생성합니다
  const square = new Square(10)
  
  // getter 메서드를 사용하여 사각형의 한 변의 길이를 출력합니다
  console.log(`한변의 길이:${square.getLength()}이다.`) // 출력: 한변의 길이:10이다.
  
  // setter 메서드를 사용하여 사각형의 길이를 -10으로 설정하려고 시도합니다
  // 값이 유효하지 않기 때문에 에러가 발생합니다
  square.setLength(-10)
*/
/*
class Square {
    #length

    constructor(length) {
        this.length = length // 길이를 초기화할 때 setter 메서드를 사용합니다
      }
    //get 으로 사각형 길이 둘레 넓이를 반환
      get length(){
        return this.#length
      }

      get perimeter(){
        return this.#length *4
      }
      get area(){
        return this.#length * this.#length
      }
      //setter로 사각형 길이를 설정
      set length(length){
        if(length <=0){
            throw '길이>0'
        }
        this.#length =length
      }
}

const squareA = new Square(10)
console.log(`한 변의 길이: ${squareA.length}`)
console.log(`둘레: ${squareA.perimeter}`)
console.log(`넓이: ${squareA.area}`)

const squareB = new Square(-10)
*/

/*
class Square{
    #length
    //Square 클래스의 인스턴스 수를 저장하는 static private 필드
    static #conuter = 0
    //클래스의 모든 인스턴스가 공유하는 필드
    static get counter(){
        return Square.#conuter
    }
    constructor(length){
        this.length =length
        Square.#conuter+=1
    }
    static perimeterOf(length){
        return length *4
    }
    static areaOf(length){
        return length *length
    }

    get length () { return this.#length }
    get perimeter () { return this.#length * 4 }
    get area () { return this.#length * this.#length }

    set length(length){
        if(length <=0){
            throw '길이>0'
        }
        this.#length =length
      }
}
const squareA = new Square(10)
const squareB = new Square(20)
const squareC = new Square(30)
console.log(`지금까지 생성된 Square 인스턴스는 ${Square.counter}개입니다.`)
console.log(`한 변의 길이가 20인 정사각형의 둘레는 ${Square.perimeterOf(20)}입니다.`)
//Square 클래스의 static 메서드를 호출합니다.
console.log(`한 변의 길이가 30인 정사각형의 둘레는 ${Square.areaOf(30)}입니다.`)

*/

//toString 메소드 오버라이드
/*객체를 문자열로 표현하는 방식을 정의하는 데 유용합니다.
 기본적으로 JavaScript 객체의 toString 메서드는 객체를 [object Object] 형식의 문자열로 반환
 */
/*
class Pet{
    constructor(name,age){
        this.name =name
        this.age = age
    }
    toString(){
        return `이름: ${this.name}\n나이: ${this.age}살` 
        }
      }

      const pet = new Pet('구름', 6)
      console.log(pet + '')
      */
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  toString() {}
}
