import React from 'react'

const AuthContext = React.createContext({
    loginDetails: {},
    loginErrors: {},
    isLoggedIn: false,
    handleChange: ()=>{},
    handleLogin: ()=>{},
    logout:()=>{}
})

export default AuthContext
