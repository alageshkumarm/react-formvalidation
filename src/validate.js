export default function Validate(values){
    let errors = {};

    if(!values.username.trim()){
        errors.username="username required"
    }
    if(!values.email.trim()){
        errors.email="email required"
    }
    if(!values.password.trim()){
        errors.password="password required"
    }
    else if(values.password.length>8){
        errors.password = "password must be in 8 charcter"
    }
    if(!values.password2.trim()){
        errors.password2="password required"
    }
    else if(values.password2!==values.password){
        errors.password2 = "password not match"
    }
    return errors;
}