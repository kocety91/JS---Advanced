function myFunc(array, startIndex, endIndex) {
  if (!Array.isArray(array)) {
    return NaN;
  } else if (array.forEach((x) => typeof x === "number")) {
    return NaN;
  } else if (Number(startIndex) < 0) {
    startIndex = 0;
  } else if (Number(endIndex) > array.length) {
    endIndex = array.length;
  }

  let slicedArray = [...array.slice(startIndex, endIndex + 1)];

  let sum = slicedArray.reduce((acc, value) => (acc += Number(value)), 0);

  return Math.round(sum * 100) / 100;
}

console.log(myFunc([10, 20, 30, 40, 50, 60], 3, 300));
console.log(myFunc([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(myFunc([10, "twenty", 30, 40], 0, 2));
console.log(myFunc([], 1, 2));
console.log(myFunc("text", 0, 2));
