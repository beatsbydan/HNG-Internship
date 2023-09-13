import React from 'react'
import './CurrentMovie.css'

const CurrentMovie = (props) => {
  return (
    <div className='currentMovie'>
      <p className="movieDetails">
        <span className='title' data-testid="movie-title">sdtrcfytbhhnjo</span>
        <span className='releaseDate' data-testid="movie-release-date">xdrfgvvgiybi</span>
        <span className='runtime' data-testid= "movie-runtime">xdfg b jhvgyubgyi</span>
      </p>
      <p className='overview' data-testid="movie-overview">fghgvyuhimoklmjibcfyvdezawstcfygvbhnjmkuytfdrsxfbgnhjmnbdxefvgbhn</p>
    </div>
  )
}

export default CurrentMovie