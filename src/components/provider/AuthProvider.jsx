import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../../firebase/firebase.config'

export const AuthContext = createContext(null)

function AuthProvider({children}) {
  const [user , setUser] = useState(null)
  const [loading, SetLoading] = useState(true)

  const createUser = (email , password) => {
    SetLoading(true)
      return createUserWithEmailAndPassword(auth , email , password)
  }

  const logOut = () => {
    return signOut(auth)
  }

  const signInWithEmailAndPasswords = (email , password) => {
    SetLoading(true)
    return signInWithEmailAndPassword(auth , email , password)
  }

  const upDateUser = (updatedData) => {
       return updateProfile(auth.currentUser , updatedData)
  }
  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signInWithEmailAndPasswords,
    loading,
    SetLoading,
    upDateUser
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth , (
        currentUser) => {
        setUser(currentUser)
        SetLoading(false)
     })
       
     return () => {
        unsubscribe();
     } 
  } , [])

  return <AuthContext value={authData}>{children}</AuthContext>;
}

export default AuthProvider