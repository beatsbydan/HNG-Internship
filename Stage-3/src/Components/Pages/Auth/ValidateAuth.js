import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../../../firebase-config.js'

const ValidateAuth = async (entry) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    let errors = {}

    if(!emailRegex.test(entry.username)){
        errors.username = "Enter a valid email"
    }
    if(entry.password === ""){
        errors.password = "Password cannot be empty."
    }
    if(Object.values(entry).every(value => value !=="")){
        await signInWithEmailAndPassword(
            auth,
            entry.username,
            entry.password
        )
        .then(result=>{
            console.log(result)
            errors.none = true
        })
        .catch(error=>{
            console.log(error)
            errors.username = 'Invalid credentials.'
            errors.password = 'Invalid credentials.'
            errors.none = false
            return
        })
    }
    return errors
}
export default ValidateAuth