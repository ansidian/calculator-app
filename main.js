let operand = ''

const numberButtons = document.querySelectorAll('[data-number]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-backspace]')


function add (a, b) {
    return a + b
}

function subtract (a, b) {
    return a - b
}

function multiply (a, b) {
    return a * b
}

function divide (a, b) {
    return a / b
}

function operate (operation, a, b) {
    // switch; check for operation and return respective function
}