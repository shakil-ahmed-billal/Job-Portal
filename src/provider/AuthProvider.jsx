import React, { createContext, useEffect, useState } from 'react'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { app } from './../firebase/firebase.config';


export const AuthContext = createContext()

const AuthProvider = ({children}) => {


    const [user , setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const [loading , setLoading] = useState(true)
    const auth = getAuth(app);

    const googlePopup = () =>{
        setLoading(true)
        return signInWithPopup(auth , googleProvider)
    }
    const userSingOut = () =>{
        return signOut(auth)
    }


    const authInfo = {
        user,
        loading ,
        googlePopup,
        userSingOut,
    }

    console.log(user)
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth , (currentUser)=>{
            setLoading(false)
            setUser(currentUser)
        })

        return ()=>{
            unSubscribe()
        }
    }, [])

  return (
    <AuthContext.Provider value={authInfo}>
    {/* render all children components */}
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
