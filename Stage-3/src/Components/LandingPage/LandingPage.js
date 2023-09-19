import React from 'react'
import logo from '../../Assets/logo.jpg'
import './LandingPage.css'
// import {useNavigate} from 'react-router-dom'

const LandingPage = () => {
    // const navigate = useNavigate()
    // setTimeout(()=>{
    //     navigate('/login')
    // }, 3500)
    return (
        <div className="landingPage">
            <img src={logo} alt='logo'/>
            <h2>Welcome to DoggieFrame</h2>
            <p>It's a clean environment to check out <span>DOGS</span> and different cute names you could name them if you had one.</p>
        </div>
    )
}

export default LandingPage