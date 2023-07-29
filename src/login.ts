export const triggeredSignUpBtn = document.getElementById('triggerSignUp')
export const triggeredLoginBtn = document.getElementById('triggerLogin')

const welcomeMessageDisplay = document.getElementById('welcomeMessage')
const popUpInvalid = document.getElementById('popUpInvalid') as HTMLInputElement

import { userLogin } from './main'
import { passWordLogin } from './loginUtils'

export function userLoginChecker(userEmail: string, userPassword: string){ 

    for(let i = 0; i <userLogin.length; i++){
      if(userLogin[i].email === userEmail && userLogin[i].password === userPassword){
          welcomeMessageDisplay?.classList.toggle('show')       
      }
    }
    passWordLogin.value = ''
    invalidPrompt()
}

function invalidPrompt (){
  popUpInvalid.textContent = `invalid input`
} 