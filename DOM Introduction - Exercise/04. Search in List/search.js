function search() {
   let towns = [...document.querySelectorAll('#towns li')];
   let searchString = document.getElementById('searchText');
   let result = document.getElementById('result');
   let count = 0;


   towns.forEach(value => {
      if (value.textContent.includes(searchString.value)){
         value.style.fontWeight = 'bold';
         value.style.textDecoration ='underline';
         count++;
      }else{
         value.style.fontWeight = '';
         value.style.textDecoration = '';
      }
   })
   searchString.value = '';
   result.textContent = `${count} matches found`;
}
