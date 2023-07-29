import './style.css'
import {triggeredSignUpBtn,triggeredLoginBtn, userLoginChecker} from './login'
import {addUserInfo} from './signup' 
export const logInContainer = document.getElementById('loginContainer')
const submitSignUpBtn = document.getElementById('submitSignUp')
const userClickedLogin = document.getElementById('loginBtn')

import {emailLogin, passWordLogin} from './loginUtils'
import {emailSignUp, passSignUp, passConfirm, nameSignUp} from './signupUtils'


triggeredSignUpBtn?.addEventListener("click", function(event){
  event.preventDefault()
  toggleLogInContainer()
})
triggeredLoginBtn?.addEventListener("click", function(event){
  event.preventDefault()
  toggleLogInContainer()
})

submitSignUpBtn?.addEventListener("click", function(event){
  event.preventDefault();
  const inputEmailValue = emailSignUp.value
  const inputpassWordValue = passSignUp.value
  const inputConfirmPass = passConfirm.value
  const inputName = nameSignUp.value
  addUserInfo(inputEmailValue, inputpassWordValue, inputConfirmPass, inputName)
  toggleLogInContainer()
})
userClickedLogin?.addEventListener("click", function(event){
  event.preventDefault();
  const inputEmailValue = emailLogin.value
  const inputpassWordValue = passWordLogin.value
  userLoginChecker(inputEmailValue,inputpassWordValue)
})

function toggleLogInContainer(){
  logInContainer?.classList.toggle('hide')
}