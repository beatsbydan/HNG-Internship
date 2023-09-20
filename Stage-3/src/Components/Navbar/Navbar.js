import React, {useContext} from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.jpg'
import AuthContext from '../../Context/AuthContext/AuthContext'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const ctx = useContext(AuthContext)
    const logout = () => {
        ctx.logout()
        .then(success=>{
            if(success.yes){
                navigate('/login')
            }
        })
    }
    return (
        <React.Fragment>
            {ctx.isLoggedIn && <div className="navbar">
                <img src={logo} alt='logo'/>
                <button onClick={logout}>Log out</button>
            </div>}
        </React.Fragment>
    )
}

export default Navbar