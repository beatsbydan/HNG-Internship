import './App.css';
import Home from './Components/Pages/Home/Home';
import Movie from './Components/Pages/Movie/Movie';
import ContextProvider from './Context/ContextProvider'
import {Routes, Route} from 'react-router-dom'
import AlertPopUp from './UI/AlertPopUp/AlertPopUp';
import AlertContextProvider from './UI/AlertContext/AlertContextProvider';

function App() {
  return (
    <AlertContextProvider>
      <ContextProvider>
        <div className="App">
          <AlertPopUp/>
          <Routes>
            <Route exact path = "/" element = {<Home/>}/>
            <Route exact path = "/movies/:id" element = {<Movie/>}/>
          </Routes>
        </div>
      </ContextProvider>
    </AlertContextProvider>
  );
}

export default App;
