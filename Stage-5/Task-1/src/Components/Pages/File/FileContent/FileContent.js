import './FileContent.css'
import React from 'react'
import copy from '../../../../Assets/copy.svg'
import facebook from '../../../../Assets/facebook.svg'
import whatsapp from '../../../../Assets/whatsapp.svg'
import telegram from '../../../../Assets/telegram.svg'
import edit from '../../../../Assets/edit.svg'
import EditModal from '../../../../UI/EditModal/EditModal'

const FileContent = () => {
    return (
        <div className='fileContent'>
            <div className="fileContentBlock">
                <div className="fileContentLeft">
                    <h1>Your video is ready!</h1>
                    <div className="name">
                        <h3>{}</h3>
                        <img src={edit} alt = "edit"/>
                        {<EditModal/>}
                    </div>
                    <div className="sendVideo">
                        <input type="email" placeholder="enter email of receiver"/>
                        <button>Send</button>
                    </div>
                    <div className="video">
                        <h4>Video Url</h4>
                        <div className="urlBlock">
                            <p>{}</p>
                            <button><span><img src={copy} alt="copy"/></span>Copy</button>
                        </div>
                    </div>
                    <div className="shareVideo">
                        <h5>Share your video</h5>
                        <div className="socials">
                            <a href="www.">
                                <img src={facebook} alt="facebook"/>
                                Facebook
                            </a>
                            <a href="www.">
                                <img src={whatsapp} alt="whatsapp"/>
                                WhatsApp
                            </a>
                            <a href="www.">
                                <img src={telegram} alt="telegram"/>
                                Telegram
                            </a>
                        </div>
                    </div>
                </div>
                <div className="fileContentRight"></div>
            </div>
            <div className="saveVideo">
                <h4>
                    To ensure the availability and privacy of your video, we recommend saving it to your device.
                </h4>
                <button>Save now</button>
            </div>
        </div>
    )
}

export default FileContent