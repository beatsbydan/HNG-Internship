import './App.css';
import ProcessingContextProvider from './UI/IsProcessing/ProcessingContext/ProcessingContextProvider';
import AuthContextProvider from './Context/AuthContext/AuthContextProvider';
import {Routes, Route, useLocation} from 'react-router-dom'
import LandingPage from './Components/Pages/LandingPage/LandingPage';
import Login from './Components/Pages/Auth/Login';
import Home from './Components/Pages/Home/Home';
import { AnimatePresence } from 'framer-motion';
import Processing from './UI/IsProcessing/Processing';

function App() {
  const location = useLocation()
  return (
    <ProcessingContextProvider>
      <AuthContextProvider>
        <div className="App">
          <header></header>
          <main>
            <Processing/>
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path={"/"} element={<LandingPage/>}/>
                <Route path={"/login"} element={<Login/>}/>
                <Route path={"/dashboard"} element = {<Home/>}/>
              </Routes>
            </AnimatePresence>
          </main>
          <footer>
            <h4>HNG-STAGE-3</h4>
          </footer>
        </div>
      </AuthContextProvider>
    </ProcessingContextProvider>
  );
}

export default App;
