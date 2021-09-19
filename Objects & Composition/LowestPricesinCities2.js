
function myFunc(array) {
    
    let obj = {};


    array.forEach(value => {
      let currentRow = value.split(' | ');
      let [town,product,priceAsString] = currentRow;
      let price = Number(priceAsString);
     

    if (obj[product] == undefined){
       obj[product] = {
          town,
          price,
       };
    }else if (obj[product].price > price ){
       obj[product].price = price;
       obj[product].town = town;
    }
   
    });

for (const key in obj) {
   console.log(`${key} -> ${obj[key].price} (${obj[key].town})`);
}

}



myFunc(['Sofia City | Audi | 100000',
   'Sofia City | BMW | 100000',
   'Sofia City | Mitsubishi | 10000',
   'Sofia City | Mercedes | 10000',
   'Sofia City | NoOffenseToCarLovers | 0',
   'Mexico City | Audi | 1000',
   'Mexico City | BMW | 99999',
   'New York City | Mitsubishi | 10000',
   'New York City | Mitsubishi | 1000',
   'Mexico City | Audi | 100000',
   'Washington City | Mercedes | 1000']
   );
