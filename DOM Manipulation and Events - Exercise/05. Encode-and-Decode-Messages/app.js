function encodeAndDecodeMessages() {
   let main = document.querySelector('#main');
   let textAreas = document.querySelectorAll('textarea');

   main.addEventListener('click',function(e) {
   if (e.target.tagName == 'BUTTON' && e.target.textContent.startsWith('Encode')){ 
     let encodedTextArea = textAreas[0];
     let asci  = [];
     let array = encodedTextArea.value.split('');

     array.forEach(value => {
         let encodeString = value.charCodeAt(0)+1;
         let newString = String.fromCharCode(encodeString);
         asci.push(newString)
     });
     
     let decodedTextArea = textAreas[1];
     decodedTextArea.value = asci.join('');
     encodedTextArea.value = '';
    }else{
        let decodeText = textAreas[1].value.split('');
        let notAsci = [];

        decodeText.forEach(value => {
            let number = value.charCodeAt(0) -1;
            let char = String.fromCharCode(number);
            notAsci.push(char);
        });

        textAreas[1].value = notAsci.join('');
    }


   });
}