import { useContext } from "react"
import { authContext } from "../context/AuthProvider"

function Navbar() {
    const value = useContext(authContext)

    return (
        <nav>
            <ul>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <a href="#">Perfil de {value.usuario}</a>
            </ul>
        </nav>
    )
}

export default Navbar