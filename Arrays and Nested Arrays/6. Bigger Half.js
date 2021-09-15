

function biggerHalf(params) {
   params.sort((a,b) => b-a);
   let newLenth = Math.ceil(params.length /2); 

   let result =  params.slice(0,newLenth);
   return result.reverse();

};

//biggerHalf([3, 19, 14, 7, 2, 19, 6]);
let ss = biggerHalf([4, 7, 2, 5]);


console.log(ss);

