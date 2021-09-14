

function cooking(input){
    let myNumber = Number(input[0]);

    for (let index = 1; index < input.length; index++) {
        myNumber = checkWord(myNumber,input[index])
    }

        function checkWord(number,word){
            if(word === 'chop'){
                number = number/2;
                console.log(number);
                return number;
            }
            else if(word === 'dice'){
                number = Math.sqrt(number);
                console.log(number);
                return number;
            }
            else if (word ==='spice'){
                number +=1;
                console.log(number);
                return number;
            }
            else if (word ==='bake'){
                number = number*3;
                console.log(number);
                return number;
            }
            else{
                number = number - number*20/100;
                console.log(number);
                return number;
            }
        }
}

cooking(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);