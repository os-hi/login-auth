import { userLogin} from "./main"


export function addUserInfo(
                            email: string,
                            password: string,
                            confirmPassword: string,
                            name: string 
                            ){
      
     const addNewUser = {
       name,
       email,
       password,
       confirmPassword
     };
     userLogin.push(addNewUser)
      console.log(userLogin)
  }