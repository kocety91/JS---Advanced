function subtract() {
   let numOne = Number(document.getElementById('firstNumber').value);
   let numTwo = Number(document.getElementById('secondNumber').value);
   let result = document.getElementById('result');

   let total = numOne - numTwo;

   result.textContent = total;
}