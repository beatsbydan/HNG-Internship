import Context from './Context'
import {useState, useEffect} from 'react'
import axios from 'axios'
import useAlert from '../Hooks/useAlert'

const ContextProvider = (props) => {
    const {setAlert} = useAlert()
    const [isPending, setIsPending] = useState(false)
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState({})
    const filterMovies = (title) =>{
        const filteredMovie = movies.filter(movie=>{
            return movie.title === title
        })
        setMovies(filteredMovie)
    }
    const getMovie = (id) => {
        setIsPending(true)
        setTimeout(async ()=>{
            await axios.get(`/${id}`,{
                headers:{
    
                }
            })
            .then(res=>{
                if(res.status === 200 ){
                    setMovie(res.status.movie)
                    setIsPending(false)
                }
            })
            .catch(err=>{
                setAlert('failure', 'Something went wrong!')
                return err
            })
        }, 3500)
    }
    const getMovies = () =>{
        setIsPending(true)
        setTimeout(async ()=>{
            await axios.get('',{
                headers:{
    
                }
            })
            .then(res=>{
                if(res.status === 200 ){
                    let newMovies = []
                    for (let i = 0; i < 10; i++){
                        newMovies.push(res.status.movies[i])
                    }
                    setMovies(...newMovies)
                    setIsPending(false)
                }
            })
            .catch(err=>{
                setAlert('failure', 'Something went wrong!')
                return err
            })
        }, 3500)
    }
    useEffect(()=>{
        // getMovies()
    },[])
    const value = {
        movie: movie,
        movies: movies,
        isPending: isPending,
        getMovie: getMovie,
        filterMovies: filterMovies
    }
    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider