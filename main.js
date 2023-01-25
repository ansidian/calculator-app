let operand = "";

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-backspace]");
const clearButton = document.querySelector("[data-clear]");
const operationScreen = document.getElementById("operand");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

numberButtons.forEach((button) =>
    button.addEventListener("click", () => appendNumber(button.textContent))
)

function appendNumber (number) {
    if (operationScreen.textContent === '0') {
        resetScreen()
    }
    if (number === '.' && operationScreen.textContent.includes('.')) return
    operationScreen.textContent += number
}
function resetScreen() {
    operationScreen.textContent = ''
}

function decimalCheck() {

}

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);

function setOperation(operation) {}

function operate(operation, a, b) {
  // switch; check for operation and return respective function
  a = Number(a);
  b = Number(b);
  switch (operation) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
  }
}
