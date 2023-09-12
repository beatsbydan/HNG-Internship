import './App.css';
import Home from './Components/Pages/Home/Home';
import Movie from './Components/Pages/Movie/Movie';
import ContextProvider from './Context/ContextProvider'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Routes>
          <Route exact path = "/" element = {<Home/>}/>
          <Route exact path = "/movie" element = {<Movie/>}/>
        </Routes>
      </div>
    </ContextProvider>
  );
}

export default App;
