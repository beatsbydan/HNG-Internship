import './App.css';
import ProcessingContextProvider from './UI/IsProcessing/ProcessingContext/ProcessingContextProvider';
import AuthContextProvider from './Context/AuthContext/AuthContextProvider';
import {Routes, Route, useLocation} from 'react-router-dom'
import LandingPage from './Components/Pages/LandingPage/LandingPage';
import Login from './Components/Pages/Auth/Login';
import Home from './Components/Pages/Home/Home';
import { AnimatePresence } from 'framer-motion';
import Processing from './UI/IsProcessing/Processing';
import PersistLogin from './Components/Pages/Auth/PersistLogin/PersistLogin';
import ProtectedRoutes from './Components/Pages/Auth/ProtectedRoutes/ProtectedRoutes';
import Unauthorized from './Components/Pages/Auth/Unauthorized/Unauthorized';

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
                {/* REGULAR ROUTES */}
                <Route path={"/unauthorized"} element={<Unauthorized/>}/>
                <Route path={"/"} element={<LandingPage/>}/>
                <Route path={"/login"} element={<Login/>}/>

                {/* PERSIST LOGIN */}
                <Route element={<PersistLogin/>}>
                  <Route element={<ProtectedRoutes/>}>
                    <Route path={"/dashboard"} element = {<Home/>}/>
                  </Route>
                </Route>
                
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
