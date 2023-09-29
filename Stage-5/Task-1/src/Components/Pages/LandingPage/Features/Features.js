import React from 'react'
import './Features.css'
import feature from '../../../Assets/features-dashboard.png'
import recording from '../../../Assets/recording.png'
import revisit from '../../../Assets/revisit.png'
import share from '../../../Assets/share.png'

const Features = () => {
  return (
    <div className='features'>
      <div className="featuresIntro">
        <h2>Features</h2>
        <p>Key Highlights of Our Extension</p>
      </div>
      <div className="featuresBlock">
        <div className="featuresLeft">
          <div className="block">
            <img src={recording} alt="icon" className="icon"/>
            <div>
              <h3>Simple Screen Recording</h3>
              <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
            </div>
          </div>
          <div className="block">
            <img src={share} alt="icon" className="icon"/>
            <div>
              <h3>Easy-to-Share URL</h3>
              <p>Share your recordings instantly with a single link. No attachments, no downloads.</p>
            </div>
          </div>
          <div className="block">
            <img src={revisit} alt="icon" className="icon"/>
            <div>
              <h3>Revisit Recordings</h3>
              <p>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
            </div>
          </div>
        </div>
        <img className='feature' src={feature} alt="feature"/>
      </div>
    </div>
  )
}

export default Features