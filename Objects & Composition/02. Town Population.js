

function myFunc(array) {
    let obj = {};

    array.forEach(value => {
    let myArray =  value.split(' <-> ').filter(value => value != ' ');
    let [town,pop] = myArray;
    let popAsNumber = Number(pop);

    if (obj[town] !== undefined){  
          obj[town] += popAsNumber;
    }else{
        obj[town] = popAsNumber;
    }
    });
  
    for (const key in obj) {
       console.log(key + ' : ' + obj[key]);
    }
    
}


// myFunc(['Sofia <-> 1200000',
// 'Montana <-> 20000',
// 'New York <-> 10000000',
// 'Washington <-> 2345000',
// 'Las Vegas <-> 1000000']
// );


myFunc(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']
);