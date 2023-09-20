import React from 'react'
import logo from '../../../Assets/logo.jpg'
import './LandingPage.css'
import {Link} from 'react-router-dom'
import Transition from '../../../UI/Transition/Transition'

const LandingPage = () => {
    return (
        <div className="landingPage">
            <img src={logo} alt='logo'/>
            <h2>Welcome to DoggieFrame</h2>
            <p>It's a clean environment to check out <span>DOGS</span> and different cute names you could give them if you had one.</p>
            <Link to={'/login'}>Get Started</Link>
        </div>
    )
}

export default Transition(LandingPage)