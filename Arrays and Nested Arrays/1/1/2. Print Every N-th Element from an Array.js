

function myFunc(array,num) {
    
let firstNum = array[0];
let myAray = [];

myAray.push(firstNum);

 for (let index = num; index < array.length; index+=num) {
    myAray.push(array[index]);
 }
 return myAray;
};



let ss = myFunc(['5', 

'20', 

'31', 

'4', 

'20'], 

2);

console.log(ss);