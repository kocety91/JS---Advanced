function solve() {
  let formElements = [
    ...document.querySelectorAll("form > :not(label)"),
  ].filter((x) => x.tagName !== "BR");

  let sections = document.querySelectorAll("section");
  let openSection = sections[1];
  let inProgressSection = sections[2];
  let completeSection = sections[3];

  let button = formElements[formElements.length - 1];

  button.addEventListener("click", function (e) {
    e.preventDefault();

    let task = formElements[0].value;
    let description = formElements[1].value;
    let date = formElements[2].value;

    if (!task || !description || !date) {
      return;
    }

    let sectionDiv = openSection.children[1];

    let articleElement = document.createElement("article");

    let h3Element = document.createElement("h3");
    h3Element.textContent = task;

    let pDescriptionElement = document.createElement("p");
    pDescriptionElement.textContent = `Description: ${description}`;

    let pDateElement = document.createElement("p");
    pDateElement.textContent = `Due Date: ${date}`;

    let divFlexElement = document.createElement("div");
    divFlexElement.classList.add("flex");

    let startButton = document.createElement("button");
    startButton.classList.add("green");
    startButton.textContent = "Start";

    let deleteButton = document.createElement("button");
    deleteButton.classList.add("red");
    deleteButton.textContent = "Delete";

    divFlexElement.appendChild(startButton);
    divFlexElement.appendChild(deleteButton);

    articleElement.appendChild(h3Element);
    articleElement.appendChild(pDescriptionElement);
    articleElement.appendChild(pDateElement);
    articleElement.appendChild(divFlexElement);

    sectionDiv.appendChild(articleElement);

    formElements[0].value = "";
    formElements[1].value = "";
    formElements[2].value = "";

    deleteButton.addEventListener("click", function (e) {
      articleElement.remove();
    });

    startButton.addEventListener("click", function (e) {
      let divFlexInProgress = articleElement.children[3];

      let btnDeleteInProgress = divFlexInProgress.children[0];
      btnDeleteInProgress.textContent = "Delete";
      btnDeleteInProgress.classList.remove("green");
      btnDeleteInProgress.classList.add("red");

      let btnFinishInprogress = divFlexInProgress.children[1];
      btnFinishInprogress.textContent = "Finish";
      btnFinishInprogress.classList.remove("red");
      btnFinishInprogress.classList.add("orange");

      inProgressSection.appendChild(articleElement);

      btnDeleteInProgress.addEventListener("click", function (e) {
        articleElement.remove();
      });

      btnFinishInprogress.addEventListener("click", function (e) {
        articleElement.removeChild(articleElement.lastChild);
        completeSection.appendChild(articleElement);
      });
    });
  });
}
