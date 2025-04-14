// DOM Elements
const quantity = document.querySelector("#quantity")
const firstChoose = document.querySelector("#firstChoose")
const secondChoose = document.querySelector("#secondChoose")
const form = document.querySelector("form")
const checkbox = document.querySelector("input[type='checkbox']")


let arrayNumbers = []

function  getRandomNumber(max, min){
  return Math.floor(Math.random() * ((max + 1) - min) + min)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()
  
  checkBoxValue = checkbox.checked
  quantityRequest = quantity.value
  min = firstChoose.value
  max = firstChoose.value

  arrayNumbers = []

  for (let index = 0; index < quantityRequest; index++) {
    let number = getRandomNumber(max, min)
    
    while (arrayNumbers.includes(number) && checkBoxValue == true){
      number = getRandomNumber(max, min)
    }
    
    arrayNumbers.push(number)
  }

  console.log(arrayNumbers)
})