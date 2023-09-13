import {useContext} from 'react'
import './MoviesList.css'
import Card from './Card/Card'
import Context from '../../../../Context/Context'
import Loading from '../../../../UI/Loading/Loading'

const MoviesList = () => {
    const imageUrl = "https://image.tmdb.org/t/p/w500"
    const ctx = useContext(Context)
    return (
        <ul className='moviesList'>
            {
                ctx.isPending ? <Loading isPending= {ctx.isPending}/> 
                : 
                ctx.filteredMovies.length === 0 ? <h3 className="defaultText">Movie unavailable. <span><button onClick={ctx.getMovies}>Go back</button></span></h3> 
                :
                ctx.filteredMovies.map((movie, index)=>{
                    return(
                        <Card
                            key={index}
                            id={movie.id}
                            getMovie={()=>ctx.getMovie(movie.id)}
                            img={imageUrl + movie.poster_path}
                            title={movie.title}
                            releaseDate={movie.release_date}
                        /> 
                    )
                })
            }
            {ctx.filteredMovies.length < 10 && ctx.filteredMovies.length > 0 && !ctx.isPending ? 
                <li>
                    <button className='defaultButton' onClick={ctx.getMovies}>Go back</button>
                </li>
                :
                <></>
            }
        </ul>
    )
}

export default MoviesList