import {useContext} from 'react'
import AuthContext from '../Context/AuthContext/AuthContext'

const useAuth = () => useContext(AuthContext)

export default useAuth