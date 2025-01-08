var userNameInput = document.getElementById("userName");
var EmailInput = document.getElementById("eMail");
var passwordInput = document.getElementById("PWD");
var user = [];
if (localStorage.getItem("users" != null)) {
  user = JSON.parse(localStorage.getItem("users"));
} else {
  function add() {
    var addUser = {
      name: userNameInput.value,
      email: EmailInput.value,
      pwd: passwordInput.value,
    };
    user.push(addUser);
    localStorage.setItem("users", JSON.stringify(user));
    clear();
  }
}
function clear() {
  (userNameInput.value = ``),
    (EmailInput.value = ``),
    (passwordInput.value = ``);
}
document.getElementById("btn").addEventListener("click", function () {
  if (userNameInput.value == "") {
    document.getElementById("error").classList.replace("d-none", "d-block");
  }
});
document.getElementById("userName").addEventListener("click", function () {
  document.getElementById("error").classList.replace("d-block", "d-none");
});
document.getElementById("eMail").addEventListener("click", function () {
  document.getElementById("error").classList.replace("d-block", "d-none");
});
document.getElementById("PWD").addEventListener("click", function () {
  document.getElementById("error").classList.replace("d-block", "d-none");
});
