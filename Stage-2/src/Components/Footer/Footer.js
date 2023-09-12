import './Footer.css'
import instagram from '../../Assets/Socials/instagram.svg'
import twitter from '../../Assets/Socials/twitter.svg'
import youtube from '../../Assets/Socials/youtube.svg'
import facebook from '../../Assets/Socials/facebook.svg'
const Footer = () => {
  return (
    <footer className='flex-column'>
        <div className='socials flex-row' >
            <img src={facebook} alt="social"/>
            <img src={instagram} alt="social"/>
            <img src={twitter} alt="social"/>
            <img src={youtube} alt="social"/>
        </div>
        <div className="links flex-row">
          <h4>Conditions of Use</h4>
          <h4>Privacy & Policy</h4>
          <h4>Press Room</h4>
        </div>
        <h4 className="subText">© 2021 MovieBox by Daniel Onyeachonam </h4>
    </footer>
  )
}

export default Footer