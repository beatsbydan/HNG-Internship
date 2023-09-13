import React from 'react'
import './Card.css'
import {Link} from 'react-router-dom'

const Card = (props) => {

    // Extracting the year from the release date
    const year = new Date(props.releaseDate).getFullYear()
    
    return (
        <li className='card' data-testid ="movie-card">
            <Link to={`/movies/${props.id}`} onClick={props.getMovie}>
                <img src={props.img} data-testid="movie-poster" alt="img"/>
                <h4 data-testid="movie-title">{props.title}</h4>
                <small data-testid="movie-release-date">{year}</small>
            </Link>
        </li>
    )
}

export default Card