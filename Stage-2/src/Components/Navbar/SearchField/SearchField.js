import {useContext} from 'react'
import './SearchField.css'
import search from '../../../Assets/search.svg'

const SearchField = () => {
    return (
        <form action="" className='searchField'>
            <div className="formElement flex-row">
                <input type="text" placeholder='What do you want to watch?' />
                <img className="submit" src={search} alt="search" />
            </div>
        </form>
    )
}

export default SearchField