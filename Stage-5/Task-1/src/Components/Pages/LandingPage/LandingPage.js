import React from 'react'
import './LandingPage.css'
import Navbar from '../../UI/Navbar/Navbar'
import Intro from './Intro/Intro'
import Features from './Features/Features'
import HowItWorks from './HowItWorks/HowItWorks'
import Footer from '../../UI/Footer/Footer'

const LandingPage = () => {
    return (
        <div className="landingPage">
            <header>
                <Navbar/>
            </header>
            <main>
                <Intro/>
                <Features/>
                <HowItWorks/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default LandingPage