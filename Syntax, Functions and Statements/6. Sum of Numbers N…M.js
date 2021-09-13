

function sumOfNumbers(symbol1,symbol2){
    let sum = 0;
    for (let i = Number(symbol1); i <= Number(symbol2); i++) {
        
      sum +=i;  
    }
    console.log(sum);
}
sumOfNumbers(1,5);