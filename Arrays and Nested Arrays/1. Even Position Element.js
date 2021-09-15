

function evenNums(numbers) { 
    
    let myStaring = numbers.filter((element,index) => index % 2== 0).join(' ');
    console.log(myStaring);
};

evenNums(['20', '30', '40', '50', '60']);
