import { createContext, useState } from "react"

export const authContext = createContext()
const AuthProvider =  (prop) => {
    const [user, setUser] = useState(null)

    const gobalValue = {
        usuario: user,
        nuevoUsuario: setUser
    }

    return (
        <authContext.Provider value={gobalValue}>
            {prop.children}
        </authContext.Provider>
    )
}

export default AuthProvider
