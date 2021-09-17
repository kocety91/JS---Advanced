
function myFunc(array) {
   console.log(array.sort((a,b) => a.length - b.length ||  a.toLowerCase().localeCompare(b.toLowerCase())).join('\n'));
}

myFunc(['alpha', 'beta', 'gamma']);
myFunc(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);
myFunc(['test', 'Deny', 'omen', 'Default']);





