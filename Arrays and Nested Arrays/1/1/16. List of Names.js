

function dgdMIsho(array) {
   let ss = array.sort((a,b) => a.localeCompare(b)).map((value,index) => `${++index}. ${value}`).join('\n');

   console.log(ss);
}

dgdMIsho(["John", "Bob", "Christina", "Ema"]);