const passWordInput = document.querySelector
('#input-password')

// Iconos
const passWordInput = document.querySelector
('#show-password')
const passWordInput = document.querySelector
('#hide-password')

// Boton
const btnStatePassword = document.querySelector('.btn-hide-show')

btnStatePassword.addEventListener('click', ()  => {

    if(passWordInput.type === 'password'){
        passWordInput.type = 'text'
        showPassword.style.display = 'block'
    } else{
        passWordInput.type = 'password'
    }
    
})