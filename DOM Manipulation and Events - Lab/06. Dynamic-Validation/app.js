function validate() {
    let input = document.querySelector('#email');
    let regex = /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    input.addEventListener('change',function(e) {
    
       if ( e.currentTarget.value.match(regex)){
           e.currentTarget.classList.remove('error');
       }else{
           e.currentTarget.classList.add('error');
       }
    });
}