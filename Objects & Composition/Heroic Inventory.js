

function myFunc(array) {
   
    let myNewArray = [];
  array.forEach(value => {
   let currentArrya = value.split(' / ').map(value => value.trim());
  
   let [name,levelAsString,...items]=currentArrya;
   let myArrayforStrings = items.filter(i => i != ' ');
   let level = Number(levelAsString);
   let obj = {
       name,
       level,
       stringArray
   };
    myNewArray.push(obj);
  })
return JSON.stringify(myNewArray);
}

console.log(myFunc(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
));
