import React from 'react'
import './Card.css'
const Card = (props) => {
    const year = new Date(props.releaseDate).getFullYear()
    return (
        <li className='card' data-testid ="movie-card">
            <img src={props.img} data-testid="movie-poster" alt="img"/>
            <h4 data-testid="movie-title">{props.title}</h4>
            <small data-testid="movie-release-date">{year}</small>
        </li>
    )
}

export default Card