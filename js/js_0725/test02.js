//지우기
/*
document.addEventListener('DOMContentLoaded',() =>{
const p =document.querySelector('p')
const input =document.querySelector('input')
const button =document.querySelector('button')

const savedValue = localStorage.getItem('input')
if(savedValue){
  input.value = savedValue
  p.textContent =`이전 실행: ${savedValue}`
}

input.addEventListener('keyup',(event)=>{
  const value = event.currentTarget.value
  localStorage.setItem('input',value)
})
button.addEventListener('click',(event)=>{
  localStorage.clear()
  input.value =''
})
});
*/

//예외처리
/*
test =() =>{
  try{
    document.write('A위치')
    throw"예외"
  }catch(exception){
    document.write('B위치')
    return
  }
  document.write('C위치')
}
test()
*/
/*
test =() =>{
  try{
    document.write('A위치')
    throw"예외"
  }catch(exception){
    document.write('B위치')
    return
  }finally{
    document.write('C위치')
  }
}
test()

test = (object) =>{
  document.write(object.a + object.b)
}
*/


