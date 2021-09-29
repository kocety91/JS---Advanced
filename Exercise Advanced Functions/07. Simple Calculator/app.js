function calculator() {
  let num1 = document.querySelector("#num1");
  let num2 = document.querySelector("#num2");
  let result = document.querySelector("#result");

  return (obj = {
    add() {
      result.value = Number(num1.value) + Number(num2.value);
    },
    subtract() {
      result.value = Number(num1.value) - Number(num2.value);
    },
    init(selector1, selector2, resultSelector) {},
  });
}

const calculate = calculator();
calculate.init("#num1", "#num2", "#result");
