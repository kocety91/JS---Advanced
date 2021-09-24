function focused() {
    let inputs = [...document.querySelectorAll('input[type="text"]')];

   
     inputs.forEach(input => {
         
      input.addEventListener('focus', function(e){
          let parent = e.currentTarget.parentElement;

          parent.classList.add('focused');
      });

      input.addEventListener('blur',function(e) {
        let parent = e.currentTarget.parentElement;
         
        parent.classList.remove('focused');
      });
         
     });
  
}