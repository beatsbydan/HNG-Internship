import useAuth from './useAuth'

const useRefresh = () => {
    const {setIsLoggedIn} = useAuth()
    const userIsLoggedIn = localStorage.getItem('isLoggedIn')

    const refresh = () => {
        if(!userIsLoggedIn){
            setIsLoggedIn(false)
        }
        else{
            setIsLoggedIn(true)
        }
    }
    return refresh
}

export default useRefresh