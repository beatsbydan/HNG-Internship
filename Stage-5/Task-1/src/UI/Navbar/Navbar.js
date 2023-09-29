import React, {useState} from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.svg'
import {NavLink} from 'react-router-dom'
import {RiMenu3Fill} from 'react-icons/ri'
import {AiOutlineClose} from 'react-icons/ai'

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!open)
    }
    return (
        <nav className='navbar'>
            <img src={logo} alt="logo"/>
            {!open ? <RiMenu3Fill color={"rgba(18, 11, 72, 1)"} size={30} className="menu" onClick={handleOpen}/> : <AiOutlineClose color={"white"} size={30} className="menu close" onClick={handleOpen}/>}
            <div className={open ? "active innerNav" : "innerNav"}>
                <ul className='navLeft'>
                    <li><NavLink to="/">Features</NavLink></li>
                    <li><NavLink to="/">How It Works</NavLink></li>
                </ul>
                <button>Get Started</button>
            </div>
        </nav>
    )
}

export default Navbar