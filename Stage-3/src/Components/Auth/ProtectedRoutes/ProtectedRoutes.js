import useAuth from '../../../Hooks/useAuth'
import {Outlet} from 'react-router-dom'
import Unauthorized from '../Unauthorized/Unauthorized'

const ProtectedRoutes = () => {
    const {isLoggedIn} = useAuth()
    
    return isLoggedIn ? <Outlet/> : <Unauthorized/>
}

export default ProtectedRoutes