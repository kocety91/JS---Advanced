function add(number) {
  let result = 0;
  result += number;
  function calc(num2) {
    result += num2;
    return calc;
  }

  calc.toString = () => result;

  return calc;
}

console.log("" + add(1)(2)(-1));
