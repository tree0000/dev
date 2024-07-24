// const h1 =(text) =>`<h1>${text}</h1>`

// document.body.innerHTML+=h1('1번째 script')
// document.body.innerHTML+=h1('2번째 script')
// document.body.innerHTML+=h1('3번째 script')

//문서 객체 가지고 오기
/*
document.addEventListener('DOMContentLoaded',()=>{
    const header = document.querySelector('h1')
    header.textContent ='HEADERS'
    header.style.color ='white'
    header.style.backgroundColor ='black'
    header.style.padding = '10px'
})
    */
//문서 객체 글자 조작
/*
document.addEventListener('DOMContentLoaded',()=>{
    const a = document.querySelector('#a')
    const b = document.querySelector('#b')

    a.textContent ='<h1>textContent속성</h1>'
    b.innerHTML ='<h1>innerHTML속성</h1>'

});
*/
//속성 조작하기
/*
document.addEventListener('DOMContentLoaded',()=>{
    const rects = document.querySelector('.rect')

    rects.forEach((rect,index)=>{
        const width = (index +1) * 100
        const src = `https://loremflickr.com/320/240/${width}/100`;
        rect.setAttribute('src',src)
    })
});
*/
//스타일 조작하기
/*
document.addEventListener('DOMContentLoaded',()=>{
    const divs = document.querySelectorAll('body>div')

    divs.forEach((div,index)=>{
        console.log(div,index)
        const val = index * 10
        div.style.height ='10px'
        div.style.backgroundColor ='black'
    })
});
*/
//문서 객체 생성하기
//상속
/*
document.addEventListener('DOMContentLoaded',()=>{
 const header = document.createElement('h1')
 header.textContent ='문서객체 동적 생성'
 header.setAttribute('date-custom','사용자 정의')
 
 const getRandomColor = () => {
    const getRandomValue = () => Math.floor(Math.random() * 256);
    return `rgb(${getRandomValue()}, ${getRandomValue()}, ${getRandomValue()})`;
};
 header.style.color ='white';
 header.style.backgroundColor = getRandomColor();
 document.body.appendChild(header);
});
*/

//문서객체 이동하기
/*
document.addEventListener('DOMContentLoaded',()=>{
    const divA = document.querySelector('#first')
    const divB = document.querySelector('#second')
    const h1 =document.createElement('h1')
    h1.textContent ='이동하는 h1태그'
    //서로 번갈아가면서 실행
    const toFirst = () => {
        divA.appendChild(h1)
        setTimeout(toSecond,1000)
    }
    const toSecond = () => {
        divB.appendChild(h1);
        setTimeout(toFirst, 1000); 
    };
    toFirst()
});
*/

 //문서 객체 제거
 /*
 document.addEventListener('DOMContentLoaded',()=>{
    setTimeout(() => {
        const h1 = document.querySelector('h1')

        h1.parantNode.removeChild(h1)
        // document.body.removeChild(h1)
      }, 3000)
    })
*/

 //이벤트 연결
 document.addEventListener('DOMContentLoaded',()=>{
    let counter = 0
    const h1 = document.querySelector('h1')

    h1.addEventListener('click',(event)=>{
        counter++
        h1.textContent ='클릭횟수:${counter}'
        
    })
 });