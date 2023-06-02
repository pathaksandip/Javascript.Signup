var username1 = localStorage.getItem("username");
var Password1 = localStorage.getItem("Password");
var user = document.getElementById("user1");
var pass = document.getElementById("pwd1");
var taskform1 = document.getElementById("login");
taskform1.addEventListener("submit", function (event) {
  event.preventDefault();
  if (user.value === username1 && pass.value === Password1) {
    alert("login success");
  } else {
    alert("Invalid Username & password");
  }
});
