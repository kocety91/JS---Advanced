function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      let tableRows = [...document.querySelectorAll('.container tbody tr')];
      let input = document.querySelector('#searchField');
      let result = document.querySelector('#result');

      tableRows.forEach(value => {
         value.classList.remove('select');
      })


      tableRows.forEach(value => {
         if (value.textContent.toLowerCase().includes(input.value.toLowerCase())){
             value.classList.add('select');
         }
      })
      input.value = '';
   }
}