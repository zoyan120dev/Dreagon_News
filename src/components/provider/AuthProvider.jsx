import React, { createContext, useState } from 'react'

export const AuthContext = createContext(null)

function AuthProvider({children}) {
  const [user , setUser] = useState(null)
  const authData = {
    user,
    setUser,
  }
  return <AuthContext value={authData}>{children}</AuthContext>
}

export default AuthProvider