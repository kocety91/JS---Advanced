window.addEventListener("load", solution);

function solution() {
  let fname = document.querySelector("#fname");
  let email = document.querySelector("#email");
  let phone = document.querySelector("#phone");
  let address = document.querySelector("#address");
  let code = document.querySelector("#code");
  let infoPreview = document.querySelector("#infoPreview");
  let editBTN = document.querySelector("#editBTN");
  let continueBTN = document.querySelector("#continueBTN");
  let information = document.querySelector("#information");
  let block = document.querySelector("#block");

  document.querySelector("#submitBTN").addEventListener("click", function (e) {
    if (fname.value && email.value) {
      let liOne = document.createElement("li");
      let liTwo = document.createElement("li");
      let liTree = document.createElement("li");
      let liFour = document.createElement("li");
      let liFive = document.createElement("li");

      liOne.textContent = `Full Name: ${fname.value}`;
      liTwo.textContent = `Email: ${email.value}`;
      liTree.textContent = `Phone Number: ${phone.value}`;
      liFour.textContent = `Address: ${address.value}`;
      liFive.textContent = `Post Code: ${code.value}`;

      infoPreview.appendChild(liOne);
      infoPreview.appendChild(liTwo);
      infoPreview.appendChild(liTree);
      infoPreview.appendChild(liFour);
      infoPreview.appendChild(liFive);

      fname.value = "";
      email.value = "";
      phone.value = "";
      address.value = "";
      code.value = "";

      e.target.disabled = true;
      editBTN.disabled = false;
      continueBTN.disabled = false;

      editBTN.addEventListener("click", function (e) {
        fname.value = liOne.textContent.substr(11, liOne.length);
        email.value = liTwo.textContent.substr(7, liTwo.length);
        phone.value = liTree.textContent.substr(14, liTree.length);
        address.value = liFour.textContent.substr(9, liFive.length);
        code.value = liFive.textContent.substr(11, liFive.length);

        document.querySelector("#submitBTN").disabled = false;
        editBTN.disabled = true;
        continueBTN.disabled = true;

        liOne.remove();
        liTwo.remove();
        liTree.remove();
        liFour.remove();
        liFive.remove();
      });

      continueBTN.addEventListener("click", function (e) {
        form.remove();
        information.remove();

        let h3 = document.createElement("h3");
        h3.textContent = "Thank you for your reservation !";
        block.appendChild(h3);
      });
    }
  });
}
