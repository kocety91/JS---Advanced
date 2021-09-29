function myFunc(array, command) {
  return (sortedArray =
    command == "asc"
      ? array.sort((a, b) => a - b)
      : array.sort((a, b) => b - a));
}

console.log(myFunc([14, 7, 17, 6, 8], "asc"));
console.log(myFunc([14, 7, 17, 6, 8], "desc"));
