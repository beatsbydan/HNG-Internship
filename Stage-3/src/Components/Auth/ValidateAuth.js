import axios from 'axios'

const ValidateAuth = async (entry) => {
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
            if(res.status === 200){
                errors.none = true
            }
        })
        .catch(error=>{
            console.log(error)
            errors.none = false
            return
        })
    }
}
export default ValidateAuth