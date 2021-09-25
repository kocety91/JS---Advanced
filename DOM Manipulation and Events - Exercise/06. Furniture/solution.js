function solve() {
  let main = document.querySelector('#container');
  let tbody = document.querySelector('.table tbody');

  let textAreas = document.querySelectorAll('textarea');
  main.addEventListener('click',function(e) {

    if (e.target.tagName == 'BUTTON' && e.target.textContent.startsWith('Generate')){
    let array = JSON.parse(textAreas[0].value);
    
    array.forEach(value => {
     let tr = document.createElement('tr');
     let tdImage = document.createElement('td');
     let image = document.createElement('img');

     image.src = value.img;
     tdImage.appendChild(image);

     let tdName = document.createElement('td');
     let p = document.createElement('p');

     p.textContent = value.name;
     tdName.appendChild(p);

     let tdPrice = document.createElement('td');
     let pPrice = document.createElement('p');

     pPrice.textContent = value.price;
     tdPrice.appendChild(pPrice);

     let tdDecFactor = document.createElement('td');
     let pDecFactor = document.createElement('p');

     pDecFactor.textContent = value.decFactor;
     tdDecFactor.appendChild(pDecFactor);

     let tdInput = document.createElement('td');
     let input = document.createElement('input');

     input.type = 'checkbox';
     input.checked = true;
     tdInput.appendChild(input);


     tr.appendChild(tdImage);
     tr.appendChild(tdName);
     tr.appendChild(tdPrice);
     tr.appendChild(tdDecFactor);
     tr.appendChild(tdInput);

     tbody.appendChild(tr);

    })

   }else if (e.target.tagName == 'BUTTON' && e.target.textContent.startsWith('Buy')){
    let names = [...tbody.querySelectorAll('tr')];

    let obj = {};

     names.forEach(x => {
       let tdElement = x.children[4];
       let inputElement = tdElement.children[0];
        
       if (inputElement.checked){
        
        if (obj['products'] == undefined){
         obj['products'] = [];
        }

        obj['products'].push(x.children[1].textContent);

        if (obj['totalPrice'] == undefined){
          obj['totalPrice'] =0;
        }
        obj['totalPrice'] += Number(x.children[2].textContent);

        if (obj['averageDecoration'] == undefined){
          obj['averageDecoration'] = 0;
        }

        obj['averageDecoration'] += Number(x.children[3].textContent);
       }
     });
     textAreas[1].value = `Bought furniture: ${obj.products.join(', ')}\nTotal price: ${Number(obj.totalPrice).toFixed(2)}\nAverage decoration factor: ${Number(obj.averageDecoration / obj.products.length)}`;
     
   }

 })

}