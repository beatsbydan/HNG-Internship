import React from 'react'

const AuthContext = React.createContext({
    loginDetails: {},
    loginErrors: {},
    isLoggedIn: false,
    setIsLoggedIn: ()=>{},
    handleChange: ()=>{},
    handleLogin: ()=>{},
    logout: ()=>{}
})

export default AuthContext
