import React from "react";

const Context = React.createContext({
    movie: {},
    movies: [],
    filteredMovies: [],
    isPending: {},
    title: '',
    handleChange: ()=>{},
    getMovie: ()=>{},
    getMovies: ()=>{},
    filterMovies: ()=>{}
})
export default Context