function myFunc(inputArr) {
  let arr = [];

  let obj = {
    add(input) {
      arr.push(input);
    },
    remove(input) {
      arr = arr.filter((x) => x != input);
    },
    print() {
      console.log(arr.join(","));
    },
  };

  for (const row of inputArr) {
    let splitedROw = row.split(" ");
    let command = splitedROw[0];
    let word = splitedROw[1];

    obj[command](word);
  }
}

// myFunc(["add hello", "add again", "remove hello", "add again", "print"]);
myFunc(["add pesho", "add george", "add peter", "remove peter", "print"]);
