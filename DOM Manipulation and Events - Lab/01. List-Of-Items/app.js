function addItem() {
   let ul = document.querySelector('#items');
   let input = document.querySelector('#newItemText');   // value
   let newLi = document.createElement('li');
   
    newLi.textContent = input.value;
    ul.appendChild(newLi);
    input.value = ' ';

}



