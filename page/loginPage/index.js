let hideIcon=document.querySelector('.bi-eye-slash')
let showIcon=document.querySelector('.bi-eye')
let passwordInput=document.querySelector('.password-input')

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



// userin elave olunmasi 
let form= document.querySelector('form')
let emailInput= document.querySelector('.email-input')
// let users= []
// localStorage.setItem('myusers', JSON.stringify(users))
form.addEventListener('submit',addUser)
function addUser(e){
    e.preventDefault()
    let user= {
        email: emailInput.value,
        password:passwordInput.value
    }
    let userArray= localStorage.getItem('myusers')
    let userArray2= JSON.parse(userArray)
    userArray2.push(user)
    localStorage.setItem('myusers', JSON.stringify(userArray2))
    form.reset()
}
