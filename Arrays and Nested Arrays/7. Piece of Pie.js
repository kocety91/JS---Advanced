

function pieceofPie(array,input1,input2) {
    let startIndex = array.indexOf(input1);
    let endIndex = array.indexOf(input2);


let myArray = array.slice(startIndex,endIndex+1);
return myArray;

}



pieceofPie(['Pumpkin Pie',

'Key Lime Pie',

'Cherry Pie',

'Lemon Meringue Pie',

'Sugar Cream Pie'],

'Key Lime Pie',

'Lemon Meringue Pie'
);