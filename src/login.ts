export const triggeredSignUpBtn = document.getElementById('triggerSignUp')
export const triggeredLoginBtn = document.getElementById('triggerLogin')
const emailLogin = document.getElementById('emailLogin') as HTMLInputElement
const passWordLogin = document.getElementById('passLogin') as HTMLInputElement
const welcomeMessageDisplay = document.getElementById('welcomeMessage')
const popUpInvalid = document.getElementById('popUpInvalid') as HTMLInputElement

import {userLogin} from './main'


  

export function userLoginChecker(){ 
    let userEmail = emailLogin?.value
    let userPass = passWordLogin?.value
    for(let i = 0; i <userLogin.length; i++){
      if(userLogin[i].email == userEmail.toString() && userLogin[i].password == userPass.toString()){
          welcomeMessageDisplay?.classList.toggle('show')       
      }
      else{
        popUpInvalid.innerHTML += `
          Invalid input!
        `
        passWordLogin.value = '';
      }
    }
  }