

function myFunc(array) {
    
  let obj = {};

   array.sort((a,b) => a.localeCompare(b)).forEach(value => {
    let letter = value.slice(0,1);

     let myArray = value.split(' : ');
     let product = myArray[0];
     let price = Number(myArray[1]);

      if (obj[letter]  == undefined){
         obj[letter] = [];
         
      }
      obj[letter].push({product,price});

 });

 for (const bigLetter in obj) {
  console.log(`${bigLetter}`);  //A
  for (const value of obj[bigLetter]) {
    console.log(`  ${value.product}: ${value.price}`);
  }
}
  
}

console.log(myFunc(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
));
