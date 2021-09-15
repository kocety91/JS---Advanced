


function nums(params) {
    let myArray = [];

    params.forEach(value => {
        if (value < 0){
            myArray.unshift(value);
        }
        else{
            myArray.push(value);
        }
    });
   console.log(myArray.join('\n'));
}

nums([7, -2, 8, 9]);