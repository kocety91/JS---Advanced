function solution() {
  let str = "";
  let obj = {
    append(input) {
      str = str.concat(input);
    },
    removeStart(number) {
      str = str.substring(number);
    },
    removeEnd(number) {
      str = str.slice(0, str.length - number);
    },
    print() {
      console.log(str);
    },
  };
  return obj;
}

let firstZeroTest = solution();
firstZeroTest.append("hello");
firstZeroTest.append("again"); //helloagain
firstZeroTest.removeStart(3); //loagain
firstZeroTest.removeEnd(4); //loa
firstZeroTest.print();
