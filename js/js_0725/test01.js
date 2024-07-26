//글자수 
document.addEventListener('DOMContentLoaded', () => {
  const textarea = document.querySelector('textarea')
  const h1 = document.querySelector('h1')

  textarea.addEventListener('keyup',(event) =>{
    const length = textarea.value.length
    h1.textContent = `글자 수: ${length}`
  })
});
document.addEventListener('DOMContentLoaded', () => {
  const star = document.querySelector('h1')
  star.style.position = 'absolute'

  let [x, y] = [0, 0]
  const block = 20
  const print = () => {
    star.style.left = `${x * block}px`
    star.style.top = `${y * block}px`
  }
  print()
  const [left, up, right, down] = [37, 38, 39, 40]
  document.body.addEventListener('keydown', (event) => {
    switch (event.keyCode) {
      case left:
        x -= 1
        break
      case up:
        y == 1
        break
      case right:
        x += 1
        break
      case down:
        y += 1
        break
    }
    print()
  })
})

//계산
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input')
  const button = document.querySelector('button')
  const p = document.querySelector('p')

  button.addEventListener('click', () => {
    const inch = Number(input.value)
    
    if (isNaN(inch)) {
      p.textContent = '숫자를 입력해주세요'
      return
    }
    const cm = inch * 2.54
    p.textContent = `${cm} cm`
  })
})

//이메일 형식
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input')
  const p = document.querySelector('p')
  const isEmail = (value) => {
    return (value.indexOf('@') > 1)
      && (value.split('@')[1].indexOf('.') > 1)
  }

  input.addEventListener('keyup', (event) => {
    const value = event.currentTarget.value
    if (isEmail(value)) {
      p.style.color = 'green'
      p.textContent = `이메일 형식입니다: ${value}`
    } else {
      p.style.color = 'red'
      p.textContent = `이메일 형식이 아닙니다: ${value}`
    }
  })
})

//라디오 선택
document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('select')
  const p = document.querySelector('p')

  select.addEventListener('change', (event) => {
    const options = event.currentTarget.options
    const index = event.currentTarget.options.selectedIndex

    p.textContent = `선택: ${options[index].textContent}`
  })
})

//선택 중복
document.addEventListener('DOMContentLoaded', () => {
  const select = document.querySelector('select')
  const p = document.querySelector('p')

  select.addEventListener('change', (event) => {
    const options = event.currentTarget.options
    const list = []
    for (const option of options) {
      if (option.selected) {
        list.push(option.textContent)
      }
    }
    p.textContent = `선택: ${list.join(',')}`
  })
})

//cm 단위 변화
document.addEventListener('DOMContentLoaded', () => {
  let 현재값
  let 변환상수 = 10

  const select = document.querySelector('select')
  const input = document.querySelector('input')
  const span = document.querySelector('span')

  const calculate = () => {
    span.textContent = (현재값 * 변환상수).toFixed(2)
  }

  select.addEventListener('change', (event) => {
    const options = event.currentTarget.options
    const index = event.currentTarget.options.selectedIndex
    변환상수 = Number(options[index].value)
    calculate()
  })

  input.addEventListener('keyup', (event) => {
    현재값 = Number(event.currentTarget.value)
    calculate()
  })
})

//타이머
document.addEventListener('DOMContentLoaded', () => {
  let [timer, timerId] = [0, 0]
  const h1 = document.querySelector('h1')
  const checkbox = document.querySelector('input')

  checkbox.addEventListener('change', (event) => {
    if (event.currentTarget.checked) {
      timerId = setInterval(() => {
        timer += 1
        h1.textContent = `${timer}초`
      }, 1000)
    } else {
      clearInterval(timerId)
    }
  })
})

//라디오 버튼 셀렉
document.addEventListener('DOMContentLoaded', () => {

  const output = document.querySelector('#output')
  const radios = document.querySelectorAll('[name=pet]')
  radios.forEach((radio) => {
    radio.addEventListener('change', (event) => {
      const current = event.currentTarget
      if (current.checked) {
        output.textContent = `좋아하는 애완동물은 ${current.value}이시군요!`
      }
    })
  })       
})

//이미지
document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('img')
 
  imgs.forEach((img) => {
    img.addEventListener('contextmenu', (event) => {
      event.preventDefault()
    })
  })
});

//링크 활성화 버튼 동작
document.addEventListener('DOMContentLoaded', () => {
  let status = false
  const checkbox = document.querySelector('input')
  checkbox.addEventListener('change', (event) => {
    status = event.currentTarget.checked
  })
  const link = document.querySelector('a')
  link.addEventListener('click', (event) => {
    if (!status) {
      event.preventDefault()
    }
  })
})

//Todo list
document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#todo')
  const todoList = document.querySelector('#todo-list')
  const addButton = document.querySelector('#add-button')

  let keyCount = 0

  const addTodo = () => {
    if (input.value.trim() === '') {
      alert('할 일을 입력해주세요.')
      return
    }

    const item = document.createElement('div')
    const checkbox = document.createElement('input')
    const text = document.createElement('span')
    const button = document.createElement('button')

    const key = keyCount
    keyCount += 1

    item.setAttribute('data-key', key)
    item.appendChild(checkbox)
    item.appendChild(text)
    item.appendChild(button)
    todoList.appendChild(item)

    checkbox.type = 'checkbox'
    checkbox.addEventListener('change', (event) => {
      item.style.textDecoration
        = event.target.checked ? 'line-through' : ''
    })

    text.textContent = input.value

    button.textContent = '제거하기'
    button.addEventListener('click', () => {
      removeTodo(key)
    })

    input.value = ''
  }

  const removeTodo = (key) => {

    const item = document.querySelector(`[data-key="${key}"]`)
    todoList.removeChild(item)
  }


  addButton.addEventListener('click', addTodo)
  input.addEventListener('keyup', (event) => {
    const ENTER = 13
    if (event.keyCode === ENTER) {
      addTodo()
    }
  })
})





