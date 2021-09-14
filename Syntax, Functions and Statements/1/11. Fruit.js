

function fruit(fruit,kg,price){
    let result = kg/1000 * price;
    console.log(`I need $${result.toFixed(2)} to buy ${(kg/1000).toFixed(2)} kilograms ${fruit}.`);
}

fruit('portokal',2500,1.80);