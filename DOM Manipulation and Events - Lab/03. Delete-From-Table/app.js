function deleteByEmail() {
   let table = [...document.querySelectorAll('#customers tr td')].filter((value , index) => index % 2 != 0 );
   let input = document.querySelector('input[type = "text"');  //value
   let result = document.querySelector('#result');

   table.forEach(value => {
       if (value.textContent == input.value){
          value.parentNode.remove();
          result.textContent = 'Deleted.';
       }else{
           result.textContent ='Not found.';
       }
   })

}