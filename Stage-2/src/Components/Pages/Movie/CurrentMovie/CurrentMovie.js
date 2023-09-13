import {useContext} from 'react'
import './CurrentMovie.css'
import options from '../../../../Assets/options.svg'
import tickets from '../../../../Assets/tickets.svg'
import Context from '../../../../Context/Context'
import Loading from '../../../../UI/Loading/Loading'

const CurrentMovie = (props) => {
  const ctx = useContext(Context)
  
  // Extracting the year from the release date
  const year = new Date(props.movie?.release_date).getFullYear()

  // Function to convert and return the run time into hours and minutes
  const getHourAndMinute = (totalTime) => {
    const hour = totalTime / 60
    const minutes = totalTime % 60
    return {
      hour: hour,
      minutes: minutes
    }
  }

  // Extracted run time in hours
  const runtimeHour = Math.floor(getHourAndMinute(props.movie.runtime).hour)

  // Extracted run time in minutes
  const runtimeMinutes = getHourAndMinute(props.movie.runtime).minutes

  return (
    <div className='currentMovie'>
      {ctx.isPending.moviePend ? <Loading isPending = {ctx.isPending.moviePend}/> : Object.values(props.movie).length === 0 ? <h3 className='emptyText'>Nothing to see here.</h3>: 
        <>
          <div className="movieDetails flex-column">
            <div className="left flex-column">
              <div className="inner flex-column">
                <h4 className="description flex-row">
                  <span className='title' data-testid="movie-title">{props.movie.title}</span>
                  • 
                  <span className='releaseDate' data-testid="movie-release-date">{year}</span>
                  •
                  <span className='rated' >{!props.movie.adult ? 'PG-13' : '18+'}</span>
                  • 
                  <span className='runtime' data-testid= "movie-runtime">{runtimeHour}h {runtimeMinutes}m </span>
                </h4>
                <ul className="genreList flex-row">
                  {props.movie.genres?.map((genre, index)=>{
                    return(
                      <li className="genre" key={index}>{genre.name}</li>
                    )
                  })}
                </ul>
              </div>
              <p className='overview' data-testid="movie-overview">{props.movie.overview}</p>
            </div>
            <div className="myRight flex-column">
                <button className="showTimes flex-row">
                  <img src={tickets} alt="tickets"/>
                  See Showtimes
                </button>
                <button className=" watchOptions flex-row">
                  <img src={options} alt="options"/>
                  More watch options
                </button>
            </div>
          </div>
        </>
      }
    </div>
  )
}

export default CurrentMovie