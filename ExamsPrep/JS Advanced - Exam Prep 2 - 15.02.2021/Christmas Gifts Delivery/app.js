function solution() {
  let productInput = document.querySelector("input[type=text]");
  let cards = document.querySelectorAll(".card");
  let gifts = cards[1];
  let sentGifts = cards[2];
  let discartedGifts = cards[3];
  let ulOfGifts = document.querySelector(".card > ul");
  let giftsArray = [];

  document.querySelector("button").addEventListener("click", function (e) {
    ulOfGifts.innerHTML = "";

    giftsArray.push(productInput.value);
    giftsArray
      .sort((a, b) => a.localeCompare(b))
      .forEach((product) => {
        let li = document.createElement("li");
        li.classList.add("gift");
        li.textContent = product;
        let sendBtn = document.createElement("button");
        sendBtn.textContent = "Send";
        sendBtn.id = "sendButton";

        sendBtn.addEventListener("click", function (e) {
          let ul = sentGifts.children[1];
          let lookingProduct = e.target.parentNode;
          ul.appendChild(lookingProduct);
          giftsArray.filter((x) => !(x == lookingProduct));
          console.log(giftsArray);
        });

        let discardBtn = document.createElement("button");
        discardBtn.textContent = "Discard";
        discardBtn.id = "discardButton";
        li.appendChild(sendBtn);
        li.appendChild(discardBtn);
        ulOfGifts.appendChild(li);
      });

    productInput.value = "";
  });
}
