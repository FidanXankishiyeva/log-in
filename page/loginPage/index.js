let hideIcon=document.querySelector('.bi-eye-slash')
let showIcon=document.querySelector('.bi-eye')
let input=document.querySelector('.password-input')

// show password action 
hideIcon.addEventListener('click', showPass)
function showPass(){
    input.type= 'text'
    hideIcon.style.display= 'none'
    showIcon.style.display= 'block'
}

// hide password action

showIcon.addEventListener('click', hidePass)
function hidePass(){
    input.type= 'password'
    hideIcon.style.display= 'block'
    showIcon.style.display= 'none'
}