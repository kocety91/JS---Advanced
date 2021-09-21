function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
     let inputElement = document.querySelector('#inputs textarea');
     let input = [...JSON.parse(inputElement.value)];
   
    input.forEach(value, index => {
      let [restaurant,worker1,worker2 ,worker3] = input[index];
     console.log(restaurant);
     console.log(worker2);
     console.log(worker1);
     console.log(worker3);



    })


   }
}