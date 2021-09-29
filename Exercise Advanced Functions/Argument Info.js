function myFunc(...input) {
  let obj = {};
  let result = [];

  input.forEach((x) => {
    result.push(`${typeof x}: ${x}`);
    obj[typeof x] = obj[typeof x] ? obj[typeof x] + 1 : 1;
  });

  Object.keys(obj)
    .sort((a, b) => obj[b] - obj[a])
    .forEach((key) => result.push(`${key} = ${obj[key]}`));

  return result.join("\n");
}

console.log(
  myFunc("cat", 42, function () {
    console.log("Hello world!");
  })
);
