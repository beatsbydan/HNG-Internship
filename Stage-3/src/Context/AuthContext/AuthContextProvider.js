import React, {useState} from 'react'
import AuthContext from './AuthContext.js'
import useIsProcessing from '../../Hooks/useIsProcessing'
import ValidateAuth from '../../Components/Pages/Auth/ValidateAuth.js'
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from '../../firebase-config.js'

const AuthContextProvider = (props) => {
    const {setProcessing} = useIsProcessing()
    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    })

    const [loginErrors, setLoginErrors] = useState({})

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const handleChange = (e) => {
        const {id, value} = e.target
        setLoginDetails(prev => {
            return {...prev, [id]: value}
        })
    }
    
    const handleLogin = async () => {
        setProcessing(true)
        let success = {}
        await ValidateAuth(loginDetails)
        .then(res=>{
            setLoginErrors(res)
            if(res.none){
                success.yes = true
                setIsLoggedIn(true)
                setProcessing(false)
            }
            else{
                success.yes = false
                setProcessing(false)
            }
        })
        return success
    }
    onAuthStateChanged(auth, (currentUser)=>{
        if(currentUser){
            setIsLoggedIn(true)
        }
    })

    const logout = async () => {
        let success = {}
        await signOut(auth)
        .then(()=>{
            success.yes = true
            setIsLoggedIn(false)
        })    
        return success
    }
    const value = {
        loginDetails: loginDetails,
        loginErrors: loginErrors,
        isLoggedIn: isLoggedIn,
        setIsLoggedIn: setIsLoggedIn,
        handleChange: handleChange,
        handleLogin: handleLogin,
        logout: logout
    }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider