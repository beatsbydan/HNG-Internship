import React, {useState, useEffect} from 'react'
import Transition from '../../../UI/Transition/Transition'
import './Home.css'
import Navbar from '../../Navbar/Navbar'
import SearchField from './SearchField/SearchField'
import Gallery from './Gallery/Gallery'
import ImageData from './Gallery/ImageData/ImageData'

const Home = () => {
    const [search, setSearch] = useState('')
    const [filteredDogs, setFilteredDogs] = useState([])
    const filterNames = (parameter) => {
        const filteredData = ImageData.filter(image=>{
            return image.tag.toLowerCase().includes(parameter.toLowerCase())
        })
        setFilteredDogs(filteredData)
    }
    useEffect(()=>{
        setFilteredDogs(ImageData)
    },[])
    const handleChange = (e) => {
        setSearch(e.target.value)
        filterNames(e.target.value)
    }
    return (
        <div className="home">
            <Navbar/>
            <h2>Welcome!</h2>
            <p>Drag and drop to reorder.</p>
            <SearchField
                searchField={search}
                onChange={handleChange}
            />
            <Gallery data={filteredDogs}/>
        </div>
    )
}

export default Transition(Home)