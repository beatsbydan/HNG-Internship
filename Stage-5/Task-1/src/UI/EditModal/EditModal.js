import React from 'react'
import ReactDOM from 'react-dom'
import './EditModal.css'

const Backdrop = (props) => {
    return (
        <div className="backdrop" onClick={props.onClick}></div>
    )
}

const EditBlock = (props) => {
    return(
        <div className="edit">
            <label htmlFor="name">Name</label>
            <input type="text" placeholder="Enter name"/>
            <button>Change</button>
        </div>
    )
}

const EditModal = (props) => {
  return (
    <React.Fragment>
        {ReactDOM.createPortal(<Backdrop onClick={props.close}/>, document.getElementById('backdrop') )}
        {ReactDOM.createPortal(
            <EditBlock
                sendTo={props.sendTo}
                close={props.close}
                download={props.download}
            />, 
            document.getElementById('overlay') 
        )}
    </React.Fragment>
  )
}

export default EditModal