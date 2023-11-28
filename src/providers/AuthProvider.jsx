import { useState, useEffect, useContext, createContext } from "react";
import { supabase } from "../lib/supabase";

// Hook personalizado
export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}){
const [session, setSession]=useState(null)
const[user, setUser]=useState(null)

useEffect(() =>{
    supabase.auth.getSession().then((data) =>{
        setSession(data.session)
        setUser(data.session.user)
    });
    const {data: authListener} = supabase.auth.onAuthStateChange((event, session)=>{
        console.log(event, session)
        setSession(session)
        setUser(session ? session.user : null)
    })
    return()=>{
        authListener.subsription.unsubsribe()
    }
}, [])

const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Error al cerrar sesión:", error.message);
    }
  };

const value = {
    session,
    user,
    SignOut
}

    return(
        <AuthContext.Provider value={0}>{children}</AuthContext.Provider>
    )
}