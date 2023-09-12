import {useContext} from 'react'
import './Movie.css'
import Context from '../../../Context/Context'
import Sidebar from './Sidebar/Sidebar'
import CurrentMovie from './CurrentMovie/CurrentMovie'

const Movie = () => {
    const ctx = useContext(Context)
    return (
        <div className="movie">
            <Sidebar/>
            <CurrentMovie/>
        </div>
    )
}

export default Movie