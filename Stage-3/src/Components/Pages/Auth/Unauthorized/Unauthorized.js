import React from 'react'
import './Unauthorized.css'
import {BiError} from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Unauthorized = () => {
    return (
        <div className="unauthorized">
            <BiError color={'black'} size={50}/>
            <h3>You are not logged in...</h3>
            <p>Click <span><Link to='/login'>here</Link></span> to log in.</p>
        </div>
    )
}

export default Unauthorized