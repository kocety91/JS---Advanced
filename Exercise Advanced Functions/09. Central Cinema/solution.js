function solve() {
  document.querySelector("body").addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.textContent == "On Screen") {
      let allInputs = e.currentTarget.querySelectorAll(
        "#container > input[type=text]"
      );
      let [movieName, movieHall, price] = allInputs;
      let fixedPrice = Number(price.value);

      if (
        movieName.value !== "" &&
        movieHall.value !== "" &&
        price.value !== "" &&
        !isNaN(fixedPrice)
      ) {
        let movieSection = e.currentTarget.querySelector("#movies ul");
        let li = document.createElement("li");
        let span = document.createElement("span");
        span.textContent = movieName.value;
        let strong = document.createElement("strong");
        strong.textContent = `Hall: ${movieHall.value}`;
        let div = document.createElement("div");

        let strongDivChild = document.createElement("strong");
        strongDivChild.textContent = fixedPrice.toFixed(2);
        let input = document.createElement("input");
        input.setAttribute("placeholder", "Tickets Sold");
        let button = document.createElement("button");
        button.textContent = "Archive";

        div.appendChild(strongDivChild);
        div.appendChild(input);
        div.appendChild(button);

        li.appendChild(span);
        li.appendChild(strong);
        li.appendChild(div);

        movieSection.appendChild(li);

        movieName.value = "";
        movieHall.value = "";
        price.value = "";

        button.addEventListener("click", function (e) {
          if (!isNaN(Number(input.value)) && input.value != "") {
            e.target.parentNode.parentNode.remove();
            let archive = document.querySelector("#archive > ul");
            let liArchive = document.createElement("li");
            let spanArchive = document.createElement("span");
            spanArchive.textContent = span.textContent;
            let strongArchive = document.createElement("strong");
            strongArchive.textContent = `Total amount: ${(
              Number(fixedPrice) * input.value
            ).toFixed(2)}`;
            let buttonArchive = document.createElement("button");
            buttonArchive.textContent = "Delete";

            liArchive.appendChild(spanArchive);
            liArchive.appendChild(strongArchive);
            liArchive.appendChild(buttonArchive);
            archive.appendChild(liArchive);

            buttonArchive.addEventListener("click", function (e) {
              e.target.parentNode.remove();
            });

            let clearButton = archive.nextElementSibling;
            clearButton.addEventListener("click", function (e) {
              let archiveUl = [...e.target.previousElementSibling.children];
              archiveUl.forEach((x) => {
                x.remove();
              });
            });
          }
        });
      }
    }
  });
}
