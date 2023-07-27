import './style.css'
const triggeredSignUpBtn = document.getElementById('triggerSignUp')
const logInContainer = document.getElementById('loginContainer')
// const signUpContainer = document.getElementById('signUpContainer')
const triggeredLoginBtn = document.getElementById('triggerLogin')
const emailLogin: HTMLInputElement = document.getElementById('emailLogin') as HTMLInputElement
const passWordLogin: HTMLInputElement = document.getElementById('passLogin') as HTMLInputElement
const userClickedLogin = document.getElementById('loginBtn')
const welcomeMessageDisplay = document.getElementById('welcomeMessage')
const popUpInvalid = document.getElementById('popUpInvalid')
const submitSignUpBtn = document.getElementById('submitSignUp')
const emailSignUp = document.getElementById('emailSignup') as HTMLInputElement
const passSignUp = document.getElementById('passSignUp') as HTMLInputElement
const passConfirm = document.getElementById('passConfirm') as HTMLInputElement
const nameSignUp= document.getElementById('nameSignUp') as HTMLInputElement



let userLogin: {
  name: string
  email: string,
  password: string
  confirmPassword: string
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



submitSignUpBtn?.addEventListener("click", function(event){
  event.preventDefault();
  logInContainer?.classList.toggle('hide')
  addUserInfo()
})
userClickedLogin?.addEventListener("click", function(event){
  event.preventDefault();
  console.log("im clicked")
  userLoginChecker()
})



function userLoginChecker(){
  let userEmail = emailLogin!.value
  let userPass = passWordLogin!.value
  for(let i = 0; i <userLogin.length; i++){
    if(userLogin[i].email == userEmail.toString()){
      if(userLogin[i].password == userPass.toString()){
        welcomeMessageDisplay?.classList.toggle('show')
      }
    }
    else{
      popUpInvalid!.innerHTML += `
        Invalid input!
      `
    }
  }
  console.log(userLogin)    
}

function addUserInfo(){
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

triggeredSignUpBtn?.addEventListener("click", function(event){
  event.preventDefault();
  logInContainer?.classList.toggle('hide')
})

triggeredLoginBtn?.addEventListener("click", function(event){
  event.preventDefault();
  logInContainer?.classList.toggle('hide')
})
