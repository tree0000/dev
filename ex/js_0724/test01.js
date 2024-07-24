
 /*const pet = {
    name: '구름',
    eat: function (food) { 
      alert(this.name + '은/는 ' + food + '을/를 먹습니다.')
    }
  }
  pet.eat('밥')
*/

/*
const student ={}
student.name ='park'
student.hobby ='독서'
student.dream ='백수'
console.log(JSON.stringify(student,null,2));

동적으로 객체 속성 추가/제거
delete

const student ={}
student.name ='park'
student.hobby ='독서'
student.dream ='백수'

delete student.hobby

console.log(JSON.stringify(student,null,2));
*/

/*
const test ={
    a:function(){
        console.log(this);
    },
    b:() =>{
        console.log(this);
    }
}
test.a()
test.b()

기본 자료형(객체선언)

> 
const f = new Number(273)
undefined
> 
typeof f
'object'
> 
f.sample = 10
10
> 
f.sample
10
> 
f
[Number: 273] { sample: 10 }
> 
f +0
273
> 
f.valueOf
[Function: valueOf]
> 
f.valueOf()
273
*/
/*
Number.prototype.power = function(n=2){

}

> const j = '안녕'
undefined
> j.indexOf('안녕')
0
> j.indexOf('하세')
-1
> j.indexOf('없는문자열')
-1
> 
*/
/*
String.prototype.contain = function(data){
    return this.indexOf(data)>=0
}
Array.prototype.contain =function(data){
    return this.indexOf(data)>=0
}

const a ='안녕하세요'
console.log('안녕 in 안녕하세요:',a.contain('안녕'));
console.log('없는데 in 안녕하세요:',a.contain('없는데'));

const b =[273,32,103,57,52]
console.log('273 in [273,32,103,57,52]:',b.contain('273'));
console.log('0 in [273,32,103,57,52]:',b.contain('0'));
*/
//Number 객체
/*
const i =123.456789
undefined
> i.toFixed(2)
'123.46'
> i.toFixed(3)
'123.457'
> i.toFixed(4)
'123.4568'

>const stringA='메시지를 입력하다보니 앞에 줄바꿈도 들어가고'
undefined
> const stringB='앞과 뒤에 공백도 들어가고'
undefined
> stringA
'메시지를 입력하다보니 앞에 줄바꿈도 들어가고'
> stringB
'앞과 뒤에 공백도 들어가고'
> stringA.trim()
'메시지를 입력하다보니 앞에 줄바꿈도 들어가고'
> stringB.trim()
'앞과 뒤에 공백도 들어가고'
*/

//JSON 객체
/*
const data = [{
    name: '혼자 공부하는 파이썬',
    price: 18000,
    publisher: '한빛미디어'
  },{
    name: 'HTML5 웹 프로그래밍 입문',
    price: 26000,
    publisher: '한빛아카데미'
  }]
변환
  console.log(JSON.stringify(data))
  console.log(JSON.stringify(data, null, 2))
자료생성
const data = [{
    name: '혼자 공부하는 파이썬',
    price: 18000,
    publisher: '한빛미디어'
},{
    name: 'HTML5 웹 프로그래밍 입문',
    price: 26000,
    publisher: '한빛아카데미'
}]
//json자료변환
const json =JSON.stringify(data)
console.log(json)

console.log(JSON.parse(json))
*/

//Math 객체
/*
const num = Math.random()

console.log('#랜덤숫자')
console.log('0-1 사이의 랜덤한숫자:',num)
console.log('')

console.log('#랜덤숫자 범위 확대')
console.log('0~10 사이의 랜덤한숫자:',num*10)
console.log('0~50 사이의 랜덤한숫자:',num*50)
console.log('')

console.log('#랜덤숫자 범위 이동')
console.log('-5~5 사이의 랜덤한숫자:',num*10-5)
console.log('-25~25 사이의 랜덤한숫자:',num*50-25)
console.log('')

console.log('#랜덤숫자 범위 이동')
console.log('-5~5 사이의 랜덤한 정수숫자:',Math.floor(num*10-5))
console.log('-25~25 사이의 랜덤한 정수숫자:',Math.floor(num*50-25))
*/

//Lodash 라이브러리
//-개발할 때 보조적으로 사용하는 함수 제공

//속성 존재 여부 확인
/*
const object = {
    name: '혼자 공부하는 파이썬',
    price: 18000,
    publisher: '한빛미디어'
  }
//기본 속성지정
object.name = object.name!==undefined?object.name:'제목지정'
object.author = object.author!==undefined?object.name:'저자미상'

console.log(JSON.stringify(object,null,2));
*/

/*
//객체 기반의 다중 할당(객체 내부의 속성을 꺼냄)
const object = {
    name: '혼자 공부하는 파이썬',
    price: 18000,
    publisher: '한빛미디어'
  }
//변수 추출
  const{name,price} = object
  console.log('#속성이름 그대로 꺼내서 출력');
  console.log(name, price);
  console.log('');

  const {a=name,b=price} = object
  console.log('#다른이름으로 속성 꺼내서 출력');
  console.log(a, b);
*/

//얕은복사 깊은복사
//...배열,자료,자료,자료
//전개연산자로 배열 전개하고 자료 추가

/*
const 물건_200301 = ['우유','식빵']
const 물건_200302 = [...물건_200301]
물건_200302.push('고구마')
물건_200302.push('토마토')

console.log(물건_200301);
console.log(물건_200302);
*/

//객체 전개 연산자
//{...객체}
/*
const구름 ={
    이름:'구름',
    나이:6,
    종족:'강아지'
}
const 별 = 구름
    별.이름='별',
    별.나이=1

console.log(JSON.stringify(구름));
console.log(JSON.stringify(별));
*/

//{...배열,자료,자료,자료}

const 구름 ={
    이름:'구름',
    나이:6,
    종족:'강아지'
}
const 별 = {
    //...구름,
    이름:'별',
    나이:1,
    예방접종:true,
    ...구름
}
console.log(JSON.stringify(구름));
console.log(JSON.stringify(별));

