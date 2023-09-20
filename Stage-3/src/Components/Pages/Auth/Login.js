import React, {useContext} from 'react'
import {useNavigate} from 'react-router-dom' 
import './Login.css'
import Transition from '../../../UI/Transition/Transition'
import AuthContext from '../../../Context/AuthContext/AuthContext'
import InputComponent from '../../../UI/InputComponent/InputComponent'
import {BiLogIn} from 'react-icons/bi'
const Login = () => {
    const ctx = useContext(AuthContext)
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        ctx.handleLogin()
        .then(success=>{
            if(success.yes){
                navigate('/dashboard')
            }
        })
    }
    return (
        <div className="login">
            <h1>LOGIN <span><BiLogIn color={"black"} size={55}/></span></h1>
            <form className="authForm" onSubmit={handleSubmit}>
                <InputComponent
                    id={"username"}
                    label={"Email:"}
                    type={"text"}
                    value={ctx.loginDetails.username}
                    error={ctx.loginErrors.username}
                    onChange={ctx.handleChange}
                    placeholder={"Enter your username"}
                />
                <InputComponent
                    id={"password"}
                    label={"Password:"}
                    type={"password"}
                    value={ctx.loginDetails.password}
                    error={ctx.loginErrors.password}
                    onChange={ctx.handleChange}
                    placeholder={"Enter your password"}
                />
                <div className="formActions">
                    <button type='submit'>LOGIN</button>
                </div>
            </form>
        </div>
    )
}

export default Transition(Login)