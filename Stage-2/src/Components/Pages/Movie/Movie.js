import {useContext, useState} from 'react'
import './Movie.css'
import Context from '../../../Context/Context'
import Sidebar from './Sidebar/Sidebar'
import CurrentMovie from './CurrentMovie/CurrentMovie'
import {RxHamburgerMenu} from 'react-icons/rx'

const Movie = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleOpen = () =>{
        setIsOpen(!isOpen)
    }
    const ctx = useContext(Context)
    return (
        <div className="movie">
            <div className="navigation">
                {<RxHamburgerMenu className='openNav' onClick={handleOpen} size={30} color="#BE123C"/>}
            </div>
            <Sidebar
                open={isOpen}
                close={handleOpen}
            />
            <CurrentMovie
                movie={ctx.movie}
            />
        </div>
    )
}

export default Movie