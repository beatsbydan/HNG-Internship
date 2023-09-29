import React from 'react'
import ReactDOM from 'react-dom'
import './SuccessModal.css'
import kite from '../../Assets/success-kite.png'
import close from '../../Assets/close-modal.svg'


const Backdrop = (props) => {
    return(
        <div className="backdrop" onClick={props.onClick}></div>
    )
}

const SuccessBlock = (props) => {
    return (
        <div className='success'>
            <img src={close} alt="close" className="closeModal" onClick={props.close}/>
            <div className="main">
                <img src={kite} alt="kite"/>
                <p>Your video link has been sent to <span>{props.sendTo}</span></p>
                <div className="save">
                    <p>Would you need to view this video later? Save it to your device now.</p>
                    <button onClick={props.download}>Save now</button>
                </div>
            </div>
        </div>
    )
}

const SuccessModal = (props) => {
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick={props.close}/>, document.getElementById('backdrop') )}
            {ReactDOM.createPortal(
                <SuccessBlock
                    sendTo={props.sendTo}
                    close={props.close}
                    download={props.download}
                />, 
                document.getElementById('overlay') 
            )}
        </React.Fragment>
    )
}

export default SuccessModal