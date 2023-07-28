const emailSignUp = document.getElementById('emailSignup') as HTMLInputElement
const passSignUp = document.getElementById('passSignUp') as HTMLInputElement
const passConfirm = document.getElementById('passConfirm') as HTMLInputElement
const nameSignUp= document.getElementById('nameSignUp') as HTMLInputElement

import { userLogin} from "./main"



export function addUserInfo(){
    console.log("check if redirected")
     // Use the nullish coalescing operator to provide default values for null or undefined
     const name = nameSignUp?.value?.toString() ?? "";
     const email = emailSignUp?.value?.toString() ?? "";
     const password = passSignUp?.value?.toString() ?? "";
     const confirmPassword = passConfirm?.value?.toString() ?? "";
   
     const addNewUser = {
       name,
       email,
       password,
       confirmPassword,
     };
      console.log("i reached here")
      userLogin.push(addNewUser)
      console.log(userLogin)
  }