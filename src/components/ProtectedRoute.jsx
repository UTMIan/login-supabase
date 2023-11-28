import { Children, useEffect, useState } from "react";
import { useAuth } from "../providers/AuthProvider";
import App from "../App";


function ProtectedRoute({children}){
    const {session}=useAuth()
    const [isSingedIn, setSingedIn]=useState(false)
    useEffect(()=>{
        if(session){
            setIsSingedIn(true)
        } else{
            setIsSingedIn(false)
        }
    }, [session])
    return(
    <div>{isSingedIn ? children : <h1>Not Singed In</h1>}</div>)
}

export default App;