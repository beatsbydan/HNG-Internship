import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.svg'
import menu from '../../Assets/menu.svg'
import SearchField from './SearchField/SearchField'

const Navbar = () => {
    return (
        <div className='navbar flex-row'>
            <div className="logo flex-row">
                <img src={logo} alt="logo"/>
                <h4>MovieBox</h4>
            </div>
            <div className="searchField">
                <SearchField/>
            </div>
            <div className="right flex-row">
                <h5>Sign in</h5>
                <img src={menu} alt="menu"/>
            </div>
        </div>
    )
}

export default Navbar