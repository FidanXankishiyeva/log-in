let hideIcon = document.querySelector(".bi-eye-slash");
let showIcon = document.querySelector(".bi-eye");
let passwordInput = document.querySelector(".password-input");
let btn = document.querySelector(".create-btn");
let emailInput = document.querySelector(".email-input");
let form = document.querySelector("form");
let errorMsj = document.querySelector(".error-msj-1");
let userExist = false;
let existMsj = document.querySelector(".error-msj-2");

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

// database yaratmaq

function createDatabase() {
  let user = [];
  localStorage.setItem("users", JSON.stringify(user));
}
// createDatabase()

// handle register
form.addEventListener("submit", handleRegister);
function handleRegister(e) {
  e.preventDefault();
  if (emailInput.value && passwordInput.value) {
    checkUser();
    errorMsj.style.display = "none";
  } else {(errorMsj.style.display = "block")};
}

// istifadecinin yoxlanilmasi

function checkUser() {
  let users = localStorage.getItem("users");
  let userData = JSON.parse(users);
  for (let index = 0; index < userData.length; index++) {
    if (userData[index].email == emailInput.value) {
      userExist = true;
      break;
    } else {
      userExist = false;
    }
  }

  if (userExist) {
    existMsj.style.display = "block";
  } else {
    existMsj.style.display = "none";
    createUser();
    window.location.href = "../loginPage/index.html";
  }
}

// istifadecinin yaradilmasi
function createUser() {
  let users = localStorage.getItem("users");
  let usersData = JSON.parse(users);
  let user = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  usersData.push(user);

  localStorage.setItem("users", JSON.stringify(usersData));
  form.reset();
}
