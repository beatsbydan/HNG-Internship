import React, {useState} from 'react'
import AuthContext from './AuthContext.js'
import useAlert from '../../Hooks/useAlert'
import useIsProcessing from '../../Hooks/useIsProcessing'
import ValidateAuth from '../../Components/Auth/ValidateAuth.js'

const AuthContextProvider = (props) => {
    const {setAlert} = useAlert()
    const {setIsProcessing} = useIsProcessing()
    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    })

    const [loginErrors, setLoginErrors] = useState({})

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleChange = (e) => {
        const {id, value} = e.target
        setLoginDetails(prev => {
            return (
                {...prev, [id]: value}
            )
        })
    }
    
    const handleLogin = async () => {
        setIsProcessing(true)
        let success = {}
        await ValidateAuth(loginDetails)
        .then(res=>{
            setLoginErrors(res)
            if(res.none){
                success.yes = true
                setIsLoggedIn(true)
                setIsProcessing(false)
                localStorage.setItem('isLoggedIn', true)
            }
            else{
                success.yes = false
                setIsProcessing(false)
                setAlert('failure', 'Something went wrong!')
            }
        })
        return success
    }

    const value = {
        loginDetails: loginDetails,
        loginErrors: loginErrors,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        handleChange: handleChange,
        handleLogin: handleLogin
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider