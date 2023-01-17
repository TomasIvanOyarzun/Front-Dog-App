export interface form {
    name : string ,
    password : string, 
    confirmPassword : string,
    email : string
}

const regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
export const errorInput = (input : form) => {
    
    let err  = {
        name : '' ,
        password : '', 
        confirmPassword : '',
        email : ''
    }
  
   if(input.name.length >= 25) {
    err.name = '*maximum 25 characters'
  
   } else if(input.name.length == 0) {
    err.name = '*name required'
   }
  
    
    if(input.email.length == 0 ) {
      err.email = '*email required'
    } else if (!regex.test(input.email)) {
        err.email = '*invalid email'
    } 
  
    if(input.password.length == 0 ) {
      err.password = '*password required'
    } else if (input.password.length < 8 || input.password.length > 25) {
      err.password = '*minimum 8 and maximum 25 characters'
    } 
    
    if(input.confirmPassword.length == 0 ) {
      err.confirmPassword = '*password required'
    }  else if(input.confirmPassword !== input.password) {
      
      err.confirmPassword = '*the password does not match the one above'
    } 

   return err
  }