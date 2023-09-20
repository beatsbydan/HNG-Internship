import React from 'react'
import {ImSearch} from 'react-icons/im'
import './SearchField.css'

const SearchField = (props) => {
    return (
        <div className="searchField">
            <input type="text" id="search" placeholder="Search by name" value={props.value} onChange={props.onChange}/>
            <ImSearch className='searchButton' size={30} color={"black"}/>
        </div>
    )
}

export default SearchField