function sumTable() {
   let trArray = [...document.querySelectorAll('table tbody tr')];
   let result = document.getElementById('sum');
   let total = 0;

  
   for (let index = 1; index < trArray.length-1; index++) {

        let currentRow = trArray[index].textContent;
        let newArray = currentRow.split(' ');


         for (let index = 0; index < newArray.length; index++) {
             if (newArray[index].includes('.')){
                 let num = Number(newArray[index]);
                total +=num;
             }
         }
     
   }
result.textContent = total;

}