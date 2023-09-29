import React from 'react'
import './File.css'
import FileContent from './FileContent/FileContent'
import Navbar from '../../../UI/Navbar/Navbar'
import Footer from '../../../UI/Footer/Footer'

const File = () => {
    return (
        <div className="file">
            <header>
                <Navbar/>
            </header>
            <main>
                <FileContent/>
            </main>
            <footer>
                <Footer/>
            </footer>      
        </div>
    )
}

export default File