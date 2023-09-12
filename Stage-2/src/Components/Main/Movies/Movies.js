import React from 'react'
import './Movies.css'
import MoviesList from './MoviesList/MoviesList'
import arrowRight from '../../../Assets/chevron-right.svg'

const Movies = () => {
    return (
        <div className = "movies">
            <div className="introduction flex-row">
                <h2>Featured Movie</h2>
                <div className="seeMore flex-row">
                    <p>See more</p>
                    <img src={arrowRight} alt="arrow"/>
                </div>
            </div>
            <MoviesList/>
        </div>
    )
}

export default Movies