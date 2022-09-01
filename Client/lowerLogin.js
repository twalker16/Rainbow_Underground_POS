let userInput = []
function editInput(e) {
  if (e.target.textContent != 'Enter' && e.target.textContent != 'Cancel') {
    userInput.push(parseInt(e.target.textContent))
  } else if (e.target.textContent === 'Enter') {
    console.log(userInput)
  } else {
    userInput.length = 0
  }
  console.log(e.target.textContent)
}

const keypad = document.querySelectorAll('.keypad')
keypad.forEach(key => {
  key.addEventListener('click', editInput)
})
