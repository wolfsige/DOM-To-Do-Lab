// const input = document.querySelector('Do-this')
const list = document.querySelector('todo-list')

const btn = document.querySelector('button')

const rBtn = document.querySelector('#reset-btn')

btn.addEventListener('click', function(evt){

  const newLi = document.createElement('li')

  const input = document.querySelector('input')

  newLi.textContent = input.value
  if (input.value !== ''){
    document.querySelector('ul').appendChild(newLi)
    input.value = ''
    console.log(input.value)
  }
})


rBtn.addEventListener('click', function(evt){

  oldLi = document.querySelector('li')    
  document.querySelector('ul').innerHTML = ''
})

document.querySelector('ul').addEventListener('click', handleClick)
function handleClick(evt){
  document.querySelector('ul').innerHTML = ''
}

