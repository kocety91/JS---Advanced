function addItem() {
    let menu = document.querySelector('#menu');
    let newItemText = document.querySelector('#newItemText');
    let newItemValue = document.querySelector('#newItemValue');


    let option = document.createElement('option');
    option.textContent = newItemText.value; 
    option.value = newItemValue.value;
    
     menu.appendChild(option);
     
     newItemText.value = '';
     newItemValue.value ='';
}