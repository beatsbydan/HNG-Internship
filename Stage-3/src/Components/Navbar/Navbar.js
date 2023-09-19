import './Navbar.css'
import logo from '../../Assets/logo.jpg'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate()
    const logout = () => {
        setTimeout(()=>{
            navigate('/login')
        },1700)
    }
    return (
        <div className="navbar">
            <img src={logo} alt='logo'/>
            <button onClick={logout}>Log out</button>
        </div>
    )
}

export default Navbar