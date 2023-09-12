import React from 'react'
import './Home.css'
import Footer from '../../../Components/Footer/Footer';
import Header from '../../../Components/Header/Header';
import Main from '../../../Components/Main/Main';

const Home = () => {
    return (
        <div className= "home">
            <Header/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Home