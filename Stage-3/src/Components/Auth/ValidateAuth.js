import axios from 'axios'

const ValidateAuth = async (entry) => {
    const loginApi = ''

    let errors = {}

    if(entry.username === ""){
        errors.username = "Username cannot be empty."
    }
    if(entry.password === ""){
        errors.password = "Password cannot be empty."
    }
    if(Object.values(entry).every(value => value !=="")){
        await axios.post(loginApi, {...entry}, {
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(result=>{
            console.log(result)
            if(result.status === 200){
                errors.none = true
            }
        })
        .catch(error=>{
            console.log(error)
            if(error.response.status === 401){
                errors.username = 'Invalid credentials.'
                errors.password = 'Invalid credentials.'
            }
            errors.none = false
            return
        })
    }
}
export default ValidateAuth