import Context from './Context'
import {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import useAlert from '../Hooks/useAlert'

const ContextProvider = (props) => {
    const {setAlert} = useAlert()
    const [title, setTitle] = useState('')
    const [isPending, setIsPending] = useState(false)
    const [movies, setMovies] = useState([])
    const [filteredMovies, setFilteredMovies] = useState([])
    const [movie, setMovie] = useState({})
    const handleChange = (e) =>{
        setTitle(e.target.value)
    }
    const filterMovies = (title) =>{
        setIsPending(true)
        setTimeout(()=>{
            const filteredMovie = movies.filter(movie=>{
                return movie.title.toLowerCase() === title.toLowerCase()
            })
            setFilteredMovies(filteredMovie)
            setIsPending(false)
            setTitle('')
        },3500)
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
    const getMovies = useCallback(() =>{
        setIsPending(true)
        setTimeout(async ()=>{
            await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=95d73e105e4671bc9d1a42424844fdc0')
            .then(res=>{
                console.log(res)
                if(res.status === 200 ){
                    let newMovies = []
                    for (let i = 0; i < 10; i++){
                        newMovies.push(res.data.results[i])
                    }
                    setMovies(newMovies)
                    setFilteredMovies(newMovies)
                    setIsPending(false)
                }
            })
            .catch(err=>{
                console.log(err)
                setAlert('failure', 'Something went wrong!')
                return err
            })
        }, 3500)
    },[setAlert])
    useEffect(()=>{
        getMovies()
    },[getMovies])
    const value = {
        title:title,
        handleChange: handleChange,
        movie: movie,
        movies: movies,
        filteredMovies: filteredMovies,
        isPending: isPending,
        getMovie: getMovie,
        getMovies: getMovies,
        filterMovies: filterMovies
    }
    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider