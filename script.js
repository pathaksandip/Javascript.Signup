var InputName = document.getElementById("Name");
var uname = document.getElementById("Username");
var Password1 = document.getElementById("pwd");
var ConfirmPassword = document.getElementById("pwd1");
var taskform = document.getElementById("Form");
var expires = new Date();
expires.setDate(expires.getDate() + 1);
taskform.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    InputName.value !== "" &&
    uname.value !== "" &&
    Password1.value !== "" &&
    ConfirmPassword.value !== ""
  ) {
    if (
      /[a-zA-Z]/.test(InputName.value) &&
      /[a-zA-Z]/.test(uname.value) &&
      /[a-zA-Z0-9@#.]/.test(Password1.value)
    ) {
      if (Password1.value === ConfirmPassword.value) {
        console.log(Password1.value + ConfirmPassword.value);
        alert("login success");

        document.cookie = "username=" + uname.value + expires.toUTCString();
        document.cookie = "Password=" + Password1.value + expires.toUTCString();
        //setting local storage value
        localStorage.setItem("username", uname.value);
        localStorage.setItem("Password", Password1.value);
      } else {
        alert("invalid Password");
      }
    } else {
      alert("invalid Character");
    }
  } else {
    alert("Field is empty");
  }
});
