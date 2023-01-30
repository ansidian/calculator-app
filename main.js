let firstOperand = null;
let secondOperand = null;
let currentOperation = null;
let secondOperation = null;
let resetScreenState = false;

const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const clearButton = document.querySelector("[data-clear]");
const operationScreen = document.getElementById("operand");

deleteButton.addEventListener("click", backspace);
clearButton.addEventListener("click", clearScreen);
equalsButton.addEventListener("click", evaluate);

numberButtons.forEach((button) =>
  button.addEventListener("click", () => appendNumber(button.textContent))
);

operatorButtons.forEach((button) =>
  button.addEventListener("click", () => setOperation(button.textContent))
);

function appendNumber(number) {
  if (operationScreen.textContent === "0" || resetScreenState) resetScreen();
  if (number === "." && operationScreen.textContent.includes(".")) return;
  operationScreen.textContent += number;
  resetScreenState = false;
}

function clearScreen() {
  operationScreen.textContent = "0";
  firstOperand = null;
  secondOperand = null;
  currentOperation = null;
}

function resetScreen() {
  operationScreen.textContent = "";
}

function backspace() {
  operationScreen.textContent = operationScreen.textContent.slice(0, -1);
}

function setOperation(operator) {
  if (firstOperand !== null && currentOperation !== null) {
    chainOperation(currentOperation, firstOperand)
    currentOperation = operator;
  } else {
    firstOperand = operationScreen.textContent;
    currentOperation = operator;
    resetScreenState = true;
  }
}

function chainOperation(operator, a) {
  secondOperand = operationScreen.textContent;
  operationScreen.textContent = roundResult(
    operate(operator, a, secondOperand)
  );
  firstOperand = operationScreen.textContent
  currentOperation = operator;
  resetScreenState = true;
  secondOperand = operationScreen.textContent
}

function evaluate() {
  secondOperand = operationScreen.textContent;
  if (currentOperation === null) return;
  operationScreen.textContent = roundResult(
    operate(currentOperation, firstOperand, secondOperand)
  );
}

function roundResult(number) {
  return Math.round(number * 1000) / 1000;
}

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

function operate(operator, a, b) {
  // switch; check for operation and return respective function
  a = Number(a);
  b = Number(b);
  switch (operator) {
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
