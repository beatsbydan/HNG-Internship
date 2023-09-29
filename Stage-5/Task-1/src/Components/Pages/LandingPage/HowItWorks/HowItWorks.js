import React from 'react'
import './HowItWorks.css'
import one from '../../../Assets/one.png'
import two from '../../../Assets/two.png'
import three from '../../../Assets/three.png'
import howItWorks from '../../../Assets/how-it-works.png'

const HowItWorks = () => {
  return (
    <div className="howItWorks">
      <h2>How it works</h2>
      <div className="steps">
        <div className="step">
          <img src={one} className='stepImg' alt="one"/>
          <h3>Record Screen</h3>
          <p>
            Click the "Start Recording" button in our extension. 
            Choose which part of your screen to capture and who you want to send it to.
          </p>
          <img src={howItWorks} className="demoImg" alt="howItWorks"/>
        </div>
        <div className="step">
          <img src={two} className='stepImg' alt="two"/>
          <h3>Share Your Recording</h3>
          <p>
            We generate a shareable link for your video. 
            Simply send it to your audience via email or copy the link to send via any platform.
          </p>
          <img src={howItWorks} className="demoImg" alt="howItWorks"/>
        </div>
        <div className="step">
          <img src={three} className='stepImg' alt="three"/>
          <h3>Learn Effortlessly</h3>
          <p>Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
          <img src={howItWorks} className="demoImg" alt="howItWorks"/>
        </div>
      </div>
    </div>
  )
}

export default HowItWorks