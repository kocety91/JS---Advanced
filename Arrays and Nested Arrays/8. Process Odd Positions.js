

function processOddnums(params) {
  let newArray = params.filter((value,index) => index % 2 !=0).map(value => value*=2).reverse().join(' ');
  return newArray;
}

let ss =processOddnums([10, 15, 20, 25]);

console.log(ss);

