import {Routes, Route} from 'react-router-dom'
import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import File from './Components/Pages/File/File';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<LandingPage/>}/>
        <Route path="/file" element={<File/>}/>
      </Routes>
    </div>
  );
}

export default App;
