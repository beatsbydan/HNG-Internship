import useAuth from './useAuth'
import {auth} from '../firebase-config.js'
import {onAuthStateChanged} from 'firebase/auth'


const useRefresh = () => {
    const {setIsLoggedIn} = useAuth()

    const refresh = () => {
        onAuthStateChanged(auth, (currentUser)=>{
            if(!currentUser){
                setIsLoggedIn(false)
            }
            else{
                setIsLoggedIn(true)
            }
        })
    }
    return refresh
}

export default useRefresh