import Context from './Context'
import {useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import useAlert from '../Hooks/useAlert'

const ContextProvider = (props) => {
    
    // Extracting the custom alert function
    const {setAlert} = useAlert()
    
    // Variable that holds the search parameter 
    const [title, setTitle] = useState('')
    
    // variables to handle all the pend states
    const [isPending, setIsPending] = useState({
        moviesPend: false,
        moviePend: false,
        searchPend: false
    })
    
    // Variable to hold all the movies fetched initially
    const [movies, setMovies] = useState([])
    
    // Variable to store the searched movie
    const [filteredMovies, setFilteredMovies] = useState([])
    
    // Variable to store the movie fetched by id
    const [movie, setMovie] = useState({})
    
    const handleChange = (e) =>{
        setTitle(e.target.value)
    }

    // Function to filter the movie by it's title

    const filterMovies = (title) =>{
        if(title === ""){
            setIsPending({
                searchPend: true
            })
            setTimeout(()=>{
                setFilteredMovies(movies)
                setIsPending({
                    searchPend: false
                })
            },3500)
        }
        else{
            setIsPending({
                searchPend: true
            })
            setTimeout(()=>{
                const filteredMovie = movies.filter(movie=>{
                    return movie.title.toLowerCase() === title.toLowerCase()
                })
                setFilteredMovies(filteredMovie)
                setIsPending({
                    searchPend: false
                })
                setTitle('')
            },3500)
        }
    }

    // Function to get a particular movie by its id

    const getMovie = (id) => {
        setIsPending({
            moviePend: true
        })
        setTimeout(async ()=>{
            await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=95d73e105e4671bc9d1a42424844fdc0`)
            .then(res=>{
                if(res.status === 200 ){
                    setMovie(res.data)
                    setIsPending({
                        moviePend: false
                    })
                }
            })
            .catch(err=>{
                setAlert('failure', 'Something went wrong!')
                return err
            })
        }, 3500)
    }

    // Function to fetch the movies

    const getMovies = useCallback(() =>{
        setIsPending({
            moviesPend: true,
            searchPend: true
        })        
        setTimeout(async ()=>{
            await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=95d73e105e4671bc9d1a42424844fdc0')
            .then(res=>{
                if(res.status === 200 ){
                    let newMovies = []
                    for (let i = 0; i < 10; i++){
                        newMovies.push(res.data.results[i])
                    }
                    setMovies(newMovies)
                    setFilteredMovies(newMovies)
                    setIsPending({
                        moviesPend: false,
                        searchPend: false
                    })  
                }
            })
            .catch(err=>{
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
        movie: movie,
        movies: movies,
        filteredMovies: filteredMovies,
        isPending: isPending,
        getMovie: getMovie,
        getMovies: getMovies,
        handleChange: handleChange,
        filterMovies: filterMovies
    }
    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider