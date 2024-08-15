import { createContext, useState } from "react"

export const authContext = createContext()
const AuthProvider =  (prop) => {
    const [user, setUser] = useState('anonim')

    const gobalValue = {
        usuario: user
    }

    return (
        <authContext.Provider value={gobalValue.usuario}>
            {prop.children}
        </authContext.Provider>
    )
}

export default AuthProvider
