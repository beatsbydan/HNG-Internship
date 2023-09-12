import React from 'react'

const Card = (props) => {
    return (
        <li className='card' data-testid ="movie-card">
            <img src={props.img} data-testid="movie-poster" alt="img"/>
            <h4 data-testid="movie-title">{props.title}</h4>
            <small data-testid="movie-release-date">{props.releaseDate}</small>
        </li>
    )
}

export default Card