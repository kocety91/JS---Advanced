function notify(message) {
  let notification = document.querySelector("#notification");
  notification.style.display = "block";
  notification.textContent = message;

  notification.addEventListener("click", function (e) {
    e.currentTarget.style.display = "none";
  });
}
