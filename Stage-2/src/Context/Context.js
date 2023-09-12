import React from "react";

const Context = React.createContext({
    movie: {},
    movies: [],
    isPending: false,
    getMovie: ()=>{},
    filterMovies: ()=>{}
})
export default Context