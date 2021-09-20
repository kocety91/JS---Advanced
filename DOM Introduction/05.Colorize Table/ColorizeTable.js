function colorize() {
    let trArray = [...document.querySelectorAll('table tr')];
    
   for (let index = 0; index < trArray.length; index++) {
       
       if (index % 2 != 0){
          trArray[index].style.backgroundColor = 'Teal';
       }
   }  
    
}