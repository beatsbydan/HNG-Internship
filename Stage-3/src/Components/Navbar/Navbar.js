import React, {useContext} from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.jpg'
import AuthContext from '../../Context/AuthContext/AuthContext'

const Navbar = () => {
    const ctx = useContext(AuthContext)
    return (
        <React.Fragment>
            {ctx.isLoggedIn && <div className="navbar">
                <img src={logo} alt='logo'/>
                <button onClick={ctx.logout}>Log out</button>
            </div>}
        </React.Fragment>
    )
}

export default Navbar