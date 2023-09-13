import React from 'react'
import {BiHomeAlt, BiCameraMovie} from 'react-icons/bi'
import logo from '../../../../Assets/logo.svg'
import tv from '../../../../Assets/tv.svg'
import upcoming from '../../../../Assets/upcoming.svg'
import logout from '../../../../Assets/logout.svg'
import { NavLink } from 'react-router-dom'
import {TfiClose} from 'react-icons/tfi'
import './Sidebar.css'

const Sidebar = (props) => {
    const activeClass = "currPage flex-row"
    const defaultClass = "flex-row"
    return (
        <div className={props.open ? ' sideBar activeNav' : 'sideBar '}>
            <div className = "mainNav flex-column">
                <div className="logo flex-row">
                    <img src={logo} alt="logo"/>
                    <h3>MovieBox</h3>
                </div>
                <nav>
                    <NavLink to={'/'} onClick={props.close} className={({isActive})=>(isActive ? activeClass: defaultClass)}>
                        <BiHomeAlt size={20}/>
                        <p>Home</p>
                    </NavLink>
                    <NavLink className={({isActive})=>(isActive ? activeClass: defaultClass)}>
                        <BiCameraMovie color='black' size={20}/>
                        <p>Movies</p>
                    </NavLink>
                    <div className='navElement flex-row'>
                        <img src={tv} alt="tv"/>
                        <p>TV Series</p>
                    </div>
                    <div className='navElement flex-row'>
                        <img src={upcoming} alt="upcoming"/>
                        <p>Upcoming</p>
                    </div>
                </nav>
                <TfiClose className="close" color="white" size={30} onClick={props.close}/>
                <div className='endAuth'>
                    <div className='quizzes flex-column'>
                        <h5>Play movie quizes and earn free tickets</h5>
                        <small>50k people are playing now</small>
                        <button>Start playing</button>
                    </div>
                    <div className='navElement flex-row'>
                        <img src={logout} alt="logout"/>
                        <p>Log out</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar