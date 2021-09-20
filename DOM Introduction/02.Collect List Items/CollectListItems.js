function extractText() {
    let listItems = document.getElementsByTagName('li');
    let array = Array.from(listItems);
    let result = document.getElementById('result');
    array.forEach( x => {
        result.textContent += ' ' +  x.textContent + '\n';
    })
}