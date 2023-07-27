import './style.css'
const triggeredSignUpBtn = document.getElementById('triggerSignUp')
const logInContainer = document.getElementById('loginContainer')
const signUpContainer = document.getElementById('signUpContainer')
const triggeredLoginBtn = document.getElementById('triggerLogin')

triggeredSignUpBtn?.addEventListener("click", function(){
  logInContainer?.classList.toggle('hide')
})

triggeredLoginBtn?.addEventListener("click", function(){
  logInContainer?.classList.toggle('hide')
})



