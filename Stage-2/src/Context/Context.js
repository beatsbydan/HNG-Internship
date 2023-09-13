import React from "react";

const Context = React.createContext({
    movie: {},
    movies: [],
    filteredMovies: [],
    isPending: false,
    title: '',
    handleChange: ()=>{},
    getMovie: ()=>{},
    getMovies: ()=>{},
    filterMovies: ()=>{}
})
export default Context