import './style.css'
import {triggeredSignUpBtn,triggeredLoginBtn, userLoginChecker} from './login'
import {addUserInfo} from './signup' 
export const logInContainer = document.getElementById('loginContainer')
const submitSignUpBtn = document.getElementById('submitSignUp')
const userClickedLogin = document.getElementById('loginBtn')


triggeredSignUpBtn?.addEventListener("click", function(event){
  event.preventDefault();
  logInContainer?.classList.toggle('hide')
})
triggeredLoginBtn?.addEventListener("click", function(event){
  event.preventDefault();
  logInContainer?.classList.toggle('hide')
})
submitSignUpBtn?.addEventListener("click", function(event){
  event.preventDefault();
  console.log("clicked")
  addUserInfo()
  logInContainer?.classList.toggle('hide')
})
userClickedLogin?.addEventListener("click", function(event){
  event.preventDefault();
  console.log("im clicked")
  userLoginChecker()
})

export let userLogin: {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;/*  */
}[] = [
  {
    name: 'jake',
    email: 'batucanjake18@gmail.com',
    password:'mypassword',
    confirmPassword:'mypassword'
  },
  {
    name: 'angela',
    email: 'hushy@gmail.com',
    password:'angelagwapa',
    confirmPassword:'angelagwapa'
  }

]