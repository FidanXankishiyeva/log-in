let hideIcon=document.querySelector('.bi-eye-slash')
let showIcon=document.querySelector('.bi-eye')
let passwordInput=document.querySelector('.password-input')
let btn=document.querySelector('.create-btn')
let emailInput =document.querySelector('.name-input')





// show password action 
hideIcon.addEventListener('click', showPass)
function showPass(){
    passwordInput.type= 'text'
    hideIcon.style.display= 'none'
    showIcon.style.display= 'block'
}

// hide password action

showIcon.addEventListener('click', hidePass)
function hidePass(){
    passwordInput.type= 'password'
    hideIcon.style.display= 'block'
    showIcon.style.display= 'none'
}


// input value action 
btn.addEventListener('click', createBtn)
function createBtn(e){
    e.preventDefault
console.log(emailInput.value);
console.log(passwordInput.value);
    e.preventDefault()
}