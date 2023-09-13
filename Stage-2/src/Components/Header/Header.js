import Navbar from '../Navbar/Navbar'
import './Header.css'
import {useContext} from 'react'
import Context from '../../Context/Context'

const Header = () => {
    const ctx = useContext(Context)
    return (
        <header style={ctx.isPending ? {backgroundColor: 'black'} : {backgroundImage: `url(https://image.tmdb.org/t/p/w500${ctx.movies[2]?.backdrop_path})`}}>
            <Navbar/>
            {
                ctx.isPending? 
                <div className="pendingText">
                    <h2>Please wait ...</h2>
                </div>
                :
                <div className="aboutRecent">
                    <h1>{ctx.movies[2]?.title}:</h1>
                    <p>{ctx.movies[2]?.overview}</p>
                </div>
            }
        </header>
    )
}

export default Header