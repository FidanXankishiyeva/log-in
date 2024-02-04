let hideIcon=document.querySelector('.bi-eye-slash')
let showIcon=document.querySelector('.bi-eye')
let input=document.querySelector('.password-input')
let btn=document.querySelector('.create-btn')
let emailInput =document.querySelector('.name-input')
let Input =document.querySelector('.name-input')





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


// input value action 
btn.addEventListener('click', createBtn)
function createBtn(e){
    console.log(inputs.value);
    e.preventDefault()
}