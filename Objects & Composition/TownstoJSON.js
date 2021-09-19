

function myFunc(array) {
    
  let returnnArray = [];
  
  let count =0;

    array.forEach(value => {
     let myArray =   value.split('|').filter(value => value != '').map(value => value.trim());
     let [town,letiduteAsString,longitudeAsString] = myArray;
     let letidute = Number(Number(letiduteAsString).toFixed(2));
     let longitude = Number(Number(longitudeAsString).toFixed(2));
     let obj = {Town: '',Latitude : 0,Longitude : 0 };


       obj['Town'] = town;
       obj['Latitude'] = letidute;
       obj['Longitude'] = longitude;
    
    if (count > 0){
         returnnArray.push(obj);
    }
    count++;
    });

    console.log(JSON.stringify(returnnArray));
}



myFunc(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);


