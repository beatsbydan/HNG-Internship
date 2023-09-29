import React from 'react'
import './Footer.css'
import footerLogo from '../../Assets/footer-logo.svg'
const Footer = () => {
    return (
        <div className="footer">
            <img src={footerLogo} alt=""/>
            <ul>
                <li className="lead">Menu</li>
                <li>Home</li>
                <li>Converter</li>
                <li>How it Works</li>
            </ul>
            <ul>
                <li className="lead">About us</li>
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
            </ul>
            <ul>
                <li className="lead">Screen Record</li>
                <li>Browser Window</li>
                <li>Desktop</li>
                <li>Application</li>
            </ul>
        </div>
    )
}

export default Footer