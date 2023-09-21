import useAuth from '../../../../Hooks/useAuth'
import {Outlet, Navigate} from 'react-router-dom'

const ProtectedRoutes = () => {
    const {isLoggedIn} = useAuth()

    return isLoggedIn ? <Outlet/> : <Navigate to='/unauthorized'/>
}

export default ProtectedRoutes