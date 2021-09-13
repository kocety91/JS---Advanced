

function mathOperations(number1,number2,symbol){
    let result;
    switch(symbol){
        case '+' : result = number1 + number2; break;
        case '-' : result = number1 - number2; break;
        case '*' : result = number1 * number2; break;
        case '/' : result = number1 / number2; break;
        case '%' : result = number1 % number2; break;
        case '**' : result = number1 ** number2; break;
    }

    console.log(result);
}

mathOperations(5,6,'+');

