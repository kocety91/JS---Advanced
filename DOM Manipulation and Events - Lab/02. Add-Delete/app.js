function addItem() {
   let ul = document.querySelector('#items');
   let input  = document.querySelector('#newItemText');
   let liElement = document.createElement('li');
   let aElement = document.createElement('a');

  aElement.href = "#";
  aElement.textContent = '[Delete]';
  liElement.textContent = input.value;
  liElement.appendChild(aElement);
  ul.appendChild(liElement);

  aElement.addEventListener('click',myFunc);

  function myFunc(e) {
    e.target.parentNode.remove();
  }
  input.value  = ' ';
}