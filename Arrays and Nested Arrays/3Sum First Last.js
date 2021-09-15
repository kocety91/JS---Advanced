


function sum(params) {
   let firstNum = params.shift();
   let lastNum = params.pop();
   return Number(firstNum) + Number(lastNum);
}


let total =sum(['20', '30', '40']);


console.log(total);