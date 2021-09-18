

function myFunc(carObj) {
let returnObj ={};
let engineObj = {};
let carriageObj = {};
let array = [];

  if(carObj.power <= 90){
      carObj['volume'] = 1800;
  }else if(carObj.power <= 120){
      carObj['volume']= 2400;
  }else if(carObj.power <= 200){
    carObj['volume']= 3500;
  }

  returnObj['model']=carObj.model;

   engineObj['power']=carObj.power;
   engineObj['volume']=carObj.volume;

   carriageObj['type'] = carObj.carriage;
   carriageObj['color'] = carObj.color;

   
   returnObj['engine']=engineObj;
   returnObj['carriage']=carriageObj;
   

  let num = Math.round(carObj.wheelsize);
  if(num %2 == 0){
      num-=1;
  }
  for (let index = 0; index < 4; index++) {
      array[index]=num;
  }

  returnObj['wheels']= array;
  return returnObj;
}

console.log(myFunc({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
));
