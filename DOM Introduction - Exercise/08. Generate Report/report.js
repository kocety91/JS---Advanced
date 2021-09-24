function generateReport() {
    let tHeadElements = [...document.querySelectorAll('table thead tr th input')]; 
    let array = [];
    //let  sorted = tHeadElements.filter(value => value.checked).map(value =>value.parentNode.textContent).map(value => value.trim());
    
   tHeadElements.forEach((value,index) => {
       if (value.checked){
           let key = value.parentNode.textContent;
           let trElements = document.querySelectorAll('tbody tr');
            trElements.forEach( trElement => {
              
            })
       }
   })
    

}