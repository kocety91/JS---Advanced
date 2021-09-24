function solve() {
   let shoppingCart = document.querySelector('.shopping-cart');
   let textErea = document.querySelector('textarea');
   let sum = 0;
   let products = [];

    shoppingCart.addEventListener('click',function(e) {
      
      if(e.target.classList.contains('add-product')){
         let price =e.target.parentNode.nextElementSibling.textContent;
         let name = e.target.parentNode.previousElementSibling.children[0].textContent;
         let priceToNumber = Number(price);
         
         textErea.textContent += `Added ${name} for ${priceToNumber.toFixed(2)} to the cart.\n`;
         sum+=priceToNumber;
         if (!products.includes(name)){
            products.push(name);
         }
        
      }
      else if (e.target.classList.contains('checkout')){
         textErea.textContent +=`You bought ${products} for ${sum}.`
          
         let allButons = [...document.querySelectorAll('button')];
          allButons.forEach(button => {
             button.disabled = 'true';
          })
      }
    });
};