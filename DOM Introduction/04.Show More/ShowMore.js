function showText() {

    let textToShow = document.getElementById('text');
    let button = document.getElementById('more');

     if (textToShow.style.display == 'none'){
         textToShow.style.display = 'inline'
         button.style.display = 'none'
     }

}