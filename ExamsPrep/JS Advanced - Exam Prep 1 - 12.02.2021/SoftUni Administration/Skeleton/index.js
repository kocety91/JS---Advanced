function solve() {
  document
    .querySelector(".form-control > button")
    .addEventListener("click", function (e) {
      e.preventDefault();

      let inputs = document.querySelectorAll("form > div > input");
      let lecture = inputs[0];
      let date = inputs[1];
      let module = document.querySelector("select[name =lecture-module]");
      let training = document.querySelector(".modules");
      let arryaModule = [];

      if (date.value && lecture.value && module.value !== "Select module") {
        let h3 = document.createElement("h3");
        h3.textContent = `${module.value}-MODULE`;

        if (!arryaModule.includes(module.value)) {
          arryaModule.push("xaxax");
        } else {
          console.log("dadadad");
        }

        console.log(arryaModule);

        let ul = document.createElement("ul");
        let li = document.createElement("li");
        li.classList.add("flex");
        let h4 = document.createElement("h4");
        h4.textContent = `${lecture.value} - ${new Date(date.value)}`;
        let btn = document.createElement("button");
        btn.classList.add("red");
        btn.textContent = "Del";
        li.appendChild(h4);
        li.appendChild(btn);
        ul.appendChild(li);
        training.appendChild(h3);
        training.appendChild(ul);
      }
    });
}
