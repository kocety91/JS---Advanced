function validate() {
  let emaiValidator =
    /^[_a-zA-Z0-9-]+(\.[_a-zA-Z0-9-]+)*(\+[a-zA-Z0-9-]+)?@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*$/;
  let email = document.querySelector("#email");

  email.addEventListener("change", function (e) {
    let emailInput = e.currentTarget.value;
    if (!emailInput.match(emaiValidator)) {
      e.target.classList.add("error");
    } else {
      e.target.classList.remove("error");
    }
  });
}
