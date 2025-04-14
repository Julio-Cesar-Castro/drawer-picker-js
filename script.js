// DOM Elements
const quantity = document.querySelector("#quantity")
const firstChoose = document.querySelector("#firstChoose")
const secondChoose = document.querySelector("#secondChoose")
const form = document.querySelector("form")
const contentDraw = document.querySelector(".container-draw")
const checkbox = document.querySelector("input[type='checkbox']")

const hideAll = document.querySelectorAll(".hide")
const showDrawer = document.querySelector(".showDrawer")
const showDrawerBtn = document.querySelector(".showDrawer-btn")
const showDrawerText = document.querySelector(".showDrawer-text")


// Gloval Variables
let arrayNumbers = []

// Functions
/**
 * 
 * @param {Number} max  Maximum number that the user wants to keep in range
 * @param {Number} min  Minimum number that the user wants to keep in range
 * @returns 
 */
function getRandomNumber(max, min){
  return Math.floor(Math.random() * ((max + 1) - min) + min)
}

function returnPage(){
  hideAll.forEach(element => {
    element.style.display = 'flex'
  })

  showDrawer.style.display = 'none'
  showDrawerBtn.style.display = 'none'

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

  hideAll.forEach(element => {
    element.style.display = 'none'
  })

  showDrawer.style.display = 'flex'
  showDrawerBtn.style.display = 'flex'
  showDrawerText.style.display = 'initial'

  arrayNumbers.forEach(drawer => {
    let span = document.createElement('span')

    span.classList.add('draw')
    span.innerText = drawer
    span

    contentDraw.append(span)
  })

})

showDrawerBtn.addEventListener('click', (e) => {
  e.preventDefault()

  returnPage()
})