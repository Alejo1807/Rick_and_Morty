
const regexUsername = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /\d/

export default function validate(inputs){
    let errors={}

    if(!regexUsername.test(inputs.username) || inputs.username==="" ||inputs.username.length>35){
        errors.username="error se requiere un username válido (email)"
    }

    if(!regexPassword.test(inputs.password) || inputs.password==="" || inputs.password.length<6 || inputs.password.length>10 ){
        errors.password="la contraseña debe tener al menos un número y tener entre 6 y 10 dígitos"
    }

    return errors;

}