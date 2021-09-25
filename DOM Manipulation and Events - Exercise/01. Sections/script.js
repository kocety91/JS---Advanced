function create(words) {
  let content = document.querySelector('#content');
 

   words.forEach(word => {

   let div = document.createElement('div');
   let p = document.createElement('p');
     p.style.display = 'none';
     p.textContent = word;
     
     div.appendChild(p);
     content.appendChild(div);
  })
  
  content.addEventListener('click', function(e)  {
    e.target.children[0].style.display = 'block';
  });

}