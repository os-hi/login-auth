import './style.css'
import {triggeredSignUpBtn,triggeredLoginBtn, userLoginChecker, popUpInvalid} from './login'
import {addUserInfo, emailExist} from './signup' 
import userLogin from './userLoginData.json'
import {emailLogin, passWordLogin} from './loginUtils'
import {emailSignUp, passSignUp, passConfirm, nameSignUp} from './signupUtils'

export const logInContainer = document.getElementById('loginContainer')

const submitSignUpBtn = document.getElementById('submitSignUp')
const userClickedLogin = document.getElementById('loginBtn')
const confirmPassword = document.getElementById('confirmPass') as HTMLInputElement

triggeredSignUpBtn?.addEventListener("click", function(event){
  event.preventDefault()
  toggleLogInContainer()
  clearField()
})
triggeredLoginBtn?.addEventListener("click", function(event){
  event.preventDefault()
  toggleLogInContainer()
  popUpInvalid.textContent = ''
})
emailSignUp.addEventListener('keyup', function(event){
  event.preventDefault()
  emailValidate()
})

passConfirm.addEventListener('keyup', function(event){
  event.preventDefault()
  passWordChecker()
})
submitSignUpBtn?.addEventListener("click", function(event){
  event.preventDefault();
  let isInputFieldEmpty = false
  const inputEmailValue = emailSignUp.value
  const inputpassWordValue = passSignUp.value
  const inputConfirmPass = passConfirm.value
  const inputName = nameSignUp.value
  if( inputEmailValue == '' ||
      inputpassWordValue == '' ||
      inputConfirmPass == ''||
      inputName == ''){
        alert("All fields are required")
        isInputFieldEmpty = true
      }
  else{
  addUserInfo(inputEmailValue, inputpassWordValue, inputConfirmPass, inputName)
  }
})
userClickedLogin?.addEventListener("click", function(event){
  event.preventDefault();
  let isInputFieldEmpty = false
  const inputEmailValue = emailLogin.value
  const inputpassWordValue = passWordLogin.value
  if (inputEmailValue == '' || inputpassWordValue == '')
  {
    alert("All fields are required")
        isInputFieldEmpty = true
  }
  else{
  userLoginChecker(inputEmailValue,inputpassWordValue)
  }
})

export function toggleLogInContainer(){
  logInContainer?.classList.toggle('hide')
}

function emailValidate(){
  const email = emailSignUp.value
  for(let i = 0; i<userLogin.length; i++){
    if (email === userLogin[i].email){
      emailExist.textContent = `Email account already used!`
      submitSignUpBtn?.setAttribute('disabled', '')
    }
    else{
      emailExist.textContent = ''
      submitSignUpBtn?.removeAttribute('disabled')
    }
    break;
  }
}

function passWordChecker(){
  if (passSignUp.value != passConfirm.value){
    confirmPassword.textContent = `password did not match!`
    submitSignUpBtn?.setAttribute('disabled', '')
  }
  else{
    confirmPassword.textContent = ''
    submitSignUpBtn?.removeAttribute('disabled')
  }
}

function clearField(){
  emailSignUp.value = ''
  passSignUp.value = ''
  passConfirm.value = ''
  nameSignUp.value = ''
  emailExist.textContent = ''
}