

function myFunc(array) {
    let calorieObj ={};
 
   for (let index = 0; index < array.length; index+=2) {
    calorieObj[array[index]] = Number(array[index+1]);
   }
   return calorieObj;
}


console.log(myFunc(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']));
