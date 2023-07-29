// import { userLogin} from "./main"
import userLogin from './userLoginData.json'
const emailExist = document.getElementById('emailExist') 

// add new user info in the database
export function addUserInfo(
                            email: string,
                            password: string,
                            confirmPassword: string,
                            name: string 
                            ){
    const addNewUser = {
      email,
      password,
      confirmPassword,
      name
    }
     let isEmailExist = false
     for(let i = 0; i<userLogin.length; i++){
        if (email === userLogin[i].email){
          emailExist?.classList.toggle('show')
          isEmailExist = true
          console.log("here")
        }
      }
      if(isEmailExist == false){
        console.log("checking")
        // push data to array of users for login purpose
        userLogin.push(addNewUser)
        console.log(userLogin)
      } 
}