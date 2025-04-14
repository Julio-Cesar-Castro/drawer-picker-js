// DOM Elements
const quantity = document.querySelector("#quantity")
const firstChoose = document.querySelector("#firstChoose")
const secondChoose = document.querySelector("#secondChoose")
const form = document.querySelector("form")
const contentDraw = document.querySelector(".container-draw")
const checkbox = document.querySelector("input[type='checkbox']")

// Gloval Variables
let arrayNumbers = []


// Functions
/**
 * 
 * @param {Number} max  Maximum number that the user wants to keep in range
 * @param {Number} min  Minimum number that the user wants to keep in range
 * @returns 
 */
function  getRandomNumber(max, min){
  return Math.floor(Math.random() * ((max + 1) - min) + min)
}

// Events
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

  
  arrayNumbers.forEach(drawer => {
    let span = document.createElement('span')

    span.classList.add('draw')
    span.innerText = drawer

    contentDraw.append(span)
  })

  console.log(arrayNumbers)
})