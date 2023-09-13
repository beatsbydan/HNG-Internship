import {useContext} from 'react'
import './SearchField.css'
import search from '../../../Assets/search.svg'
import Context from '../../../Context/Context'

const SearchField = () => {
    const ctx = useContext(Context)
    return (
        <form action="" className='searchField'>
            <div className="formElement flex-row">
                <input type="text" value={ctx.title} onChange={ctx.handleChange} placeholder='What do you want to watch?' />
                <img className="submit" onClick={()=>ctx.filterMovies(ctx.title)} src={search} alt="search" />
            </div>
        </form>
    )
}

export default SearchField