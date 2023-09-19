import useRefresh from "../../../Hooks/useRefresh";
import useAuth from "../../../Hooks/useAuth";
import React, {useState, useEffect} from 'react'
import { Outlet } from "react-router-dom";
import Loading from "../../../UI/Loading/Loading";

const PersistLogin = () => {
    const [pending, setPending] = useState(true)
    const {isLoggedIn} = useAuth()
    const refresh = useRefresh()
    useEffect(()=>{
        !isLoggedIn 
        ? 
        setTimeout(()=>{
            refresh()
        },2500) 
        : 
        setPending(false)
    },[isLoggedIn, refresh])
    
    return (
        <>
            {pending ? <Loading isPending = {pending}/> : <Outlet/>}
        </>
    )
}

export default PersistLogin