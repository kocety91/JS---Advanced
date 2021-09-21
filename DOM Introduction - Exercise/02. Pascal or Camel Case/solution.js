function solve() {
  let firstString = document.getElementById('text').value;
  let caseForConvert = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');

  let toCamelCase = camelize(firstString);
  let pascalCase = toPascalCase(firstString.toLowerCase())

    if (caseForConvert == 'Camel Case'){
      result.textContent = `${toCamelCase}`;
    }else if(caseForConvert =='Pascal Case'){
      result.textContent = `${pascalCase}`;
    }else{
      result.textContent = 'Error!';
    };

    function camelize(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      }).replace(/\s+/g, '');
    }
    
    function toPascalCase(string) {
      return `${string}`
        .replace(new RegExp(/[-_]+/, 'g'), ' ')
        .replace(new RegExp(/[^\w\s]/, 'g'), '')
        .replace(
          new RegExp(/\s+(.)(\w*)/, 'g'),
          ($1, $2, $3) => `${$2.toUpperCase() + $3.toLowerCase()}`
        )
        .replace(new RegExp(/\w/), s => s.toUpperCase());
    }

}

