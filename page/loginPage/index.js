let hideIcon = document.querySelector(".bi-eye-slash");
let showIcon = document.querySelector(".bi-eye");
let passwordInput = document.querySelector(".password-input");
let form = document.querySelector("form");
let emailInput = document.querySelector(".email-input");
let errorMsj = document.querySelector(".error-msj");
let notFoundError = document.querySelector(".not-found-error");
let userExist = false;

// show password action
hideIcon.addEventListener("click", showPass);
function showPass() {
  passwordInput.type = "text";
  hideIcon.style.display = "none";
  showIcon.style.display = "block";
}

// hide password action

showIcon.addEventListener("click", hidePass);
function hidePass() {
  passwordInput.type = "password";
  hideIcon.style.display = "block";
  showIcon.style.display = "none";
}

// handle login
form.addEventListener("submit", handleLogin);
function handleLogin(e) {
  e.preventDefault();
  // console.log("lkjh");
  if (emailInput.value && passwordInput.value) {
    errorMsj.style.display = "none";
    findUser();
  } else {
    errorMsj.style.display = "block";
  }
}

// find user
function findUser() {
  let users = localStorage.getItem("users");
  let usersData = JSON.parse(users);
  for (let index = 0; index < usersData.length; index++) {
    if (
      usersData[index].email == emailInput.value &&
      usersData[index].password == passwordInput.value
    ) {
      userExist = true;
      break;
    } else {
      userExist = false;
    }
  }

  if (userExist) {
    notFoundError.style.display = "none";
    window.location.href = "../homePage/index.html";
  } else {
    notFoundError.style.display = "block";
  }
}
