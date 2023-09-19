// import {useContext} from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.jpg'

const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt='logo'/>
            <button>Log out</button>
        </div>
    )
}

export default Navbar