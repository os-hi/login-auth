export const triggeredSignUpBtn = document.getElementById('triggerSignUp')
export const triggeredLoginBtn = document.getElementById('triggerLogin')

const welcomeMessageDisplay = document.getElementById('welcomeMessage')
export const popUpInvalid = document.getElementById('popUpInvalid') as HTMLInputElement

import userInfo from './userLoginData.json'
import { passWordLogin } from './loginUtils'


// verifies if user account exist in the json file 
export function userLoginChecker(userEmail: string, userPassword: string) {
  let isLoggedIn = false
  for( let i = 0; i<userInfo.length; i++){
    if(userEmail === userInfo[i].email && userPassword === userInfo[i].password){
      welcomeMessageDisplay?.classList.toggle('show') 
      isLoggedIn = true
      break;
    }
  }
  if(!isLoggedIn){
    passWordLogin.value = ''
    invalidPrompt ()
  }
    
}

function invalidPrompt (){
  popUpInvalid.textContent = `Invalid input`
} 