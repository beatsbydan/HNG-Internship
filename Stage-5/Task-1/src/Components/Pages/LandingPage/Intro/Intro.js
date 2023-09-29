import React from 'react'
import './Intro.css'
import image1 from '../../../Assets/woman-using-laptop.png'
import image2 from '../../../Assets/woman-using-smartphone-technology 2.png'
import image3 from '../../../Assets/father-and-son.png'
import {BsArrowRight} from 'react-icons/bs'

const Intro = () => {
    return (
        <div className="intro">
            <div className="left">
                <h1>
                    Show Them
                    Don’t Just Tell
                </h1>
                <p>
                    Help your friends and loved ones by creating and sending videos on how to get things done on a website.
                </p>
                <button>Install HelpMeOut <span><BsArrowRight size={20}/></span></button>
            </div>
            <div className="right">
                <div>
                    <img src={image1} alt="img1" />
                    <img src={image3} alt="img2" />
                </div>
                <img src={image2} alt="img3" />
            </div>
        </div>
    )
}

export default Intro