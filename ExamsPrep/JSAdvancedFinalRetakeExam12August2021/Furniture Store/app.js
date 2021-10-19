window.addEventListener("load", solve);

function solve() {
  let model = document.querySelector("#model");
  let year = document.querySelector("#year");
  let description = document.querySelector("#description");
  let price = document.querySelector("#price");
  let tbody = document.querySelector("#furniture-list");
  let total = document.querySelector(".total-price");

  document.querySelector("form").addEventListener("click", function (e) {
    e.preventDefault();

    if (e.target.tagName === "BUTTON") {
      if (
        model.value != "" &&
        description.value != "" &&
        year.value > 0 &&
        price.value > 0
      ) {
        //1vi tr
        let trOne = document.createElement("tr");
        trOne.classList.add("info");
        let tdOne = document.createElement("td");
        tdOne.textContent = model.value;
        let tdTwo = document.createElement("td");
        tdTwo.textContent = price.value;
        let tdThree = document.createElement("td");
        let buttonOne = document.createElement("button");
        let buttonTwo = document.createElement("button");
        buttonOne.classList.add("moreBtn");
        buttonOne.textContent = "More Info";

        buttonTwo.classList.add("buyBtn");
        buttonTwo.textContent = "Buy it";
        tdThree.appendChild(buttonOne);
        tdThree.appendChild(buttonTwo);

        trOne.appendChild(tdOne);
        trOne.appendChild(tdTwo);
        trOne.appendChild(tdThree);

        //2ri tr
        let trTwo = document.createElement("tr");
        trTwo.classList.add("hide");
        let tdForTrTwo = document.createElement("td");
        tdForTrTwo.textContent = `Year: ${year.value}`;
        let tdTwoForTrTwo = document.createElement("td");

        tdTwoForTrTwo.setAttribute("colspan", 3);
        tdTwoForTrTwo.textContent = `Description: ${description.value}`;

        trTwo.appendChild(tdForTrTwo);
        trTwo.appendChild(tdTwoForTrTwo);

        //tb append
        tbody.appendChild(trOne);
        tbody.appendChild(trTwo);

        buttonOne.addEventListener("click", function (e) {
          if (e.target.textContent == "More Info") {
            e.target.textContent = "Less Info";
            trTwo.style.display = "contents";
          } else {
            e.target.textContent = "More Info";
            trTwo.style.display = "none";
          }
        });

        buttonTwo.addEventListener("click", function (e) {
          let priceIneed = trOne.children[1].textContent;
          total.textContent = priceIneed;

          trOne.remove();
          trTwo.remove();
        });
        model.value = "";
        year.value = "";
        description.value = "";
        price.value = "";
      }
    }
  });
}
