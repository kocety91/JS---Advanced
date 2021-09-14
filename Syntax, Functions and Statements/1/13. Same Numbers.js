

function sameNumber(input){
    let inputAsString = String(input);
    let sum = inputAsString.length > 0 ? Number(inputAsString[0]) : 0;
    let isSame = true;

    for (let index = 0; index < inputAsString.length-1; index++) {
        const element = inputAsString[index];
        const nextElement =inputAsString[index + 1] ;

        sum +=Number(nextElement);

        if (element !== nextElement){
            isSame = false;
        }
    }
    
    
    console.log(isSame);
    console.log(sum);
}


sameNumber(1234)
