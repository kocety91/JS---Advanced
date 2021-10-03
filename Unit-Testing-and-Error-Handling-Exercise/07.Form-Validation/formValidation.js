function validate() {
  let registerForm = document.querySelector("#registerForm");

  registerForm.addEventListener("submit", function (e) {
    e.currentTarget.preventDefault();
    console.log("xaxa");
  });
}
