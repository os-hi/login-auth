import { toggleLogInContainer} from "./main"
import userLogin from './userLoginData.json'
export const emailExist = document.getElementById('emailExist') as HTMLInputElement
export let isEmailExist = false


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
        // push data to array of users for login purpose
        userLogin.push(addNewUser)
        console.log(userLogin)
        toggleLogInContainer()
      
}