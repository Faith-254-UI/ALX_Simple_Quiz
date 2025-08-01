function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1 - number2;
}

function multiply(number1, number2) {
  return number1 * number2;
}

function divide(number1, number2) {
  if (number2 === 0) {
    return "Cannot divide by zero";
  }
  return number1 / number2;
}

// Get elements
const num1Input = document.getElementById("number1");
const num2Input = document.getElementById("number2");
const resultSpan = document.getElementById("calculation-result");

// Event listeners
document.getElementById("add").addEventListener("click", function () {
  const number1 = parseFloat(num1Input.value) || 0;
  const number2 = parseFloat(num2Input.value) || 0;
  resultSpan.textContent = add(number1, number2);
});

document.getElementById("subtract").addEventListener("click", function () {
  const number1 = parseFloat(num1Input.value) || 0;
  const number2 = parseFloat(num2Input.value) || 0;
  resultSpan.textContent = subtract(number1, number2);
});

document.getElementById("multiply").addEventListener("click", function () {
  const number1 = parseFloat(num1Input.value) || 0;
  const number2 = parseFloat(num2Input.value) || 0;
  resultSpan.textContent = multiply(number1, number2);
});

document.getElementById("divide").addEventListener("click", function () {
  const number1 = parseFloat(num1Input.value) || 0;
  const number2 = parseFloat(num2Input.value) || 0;
  resultSpan.textContent = divide(number1, number2);
});
