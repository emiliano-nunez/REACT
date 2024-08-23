import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { authContext } from "../context/AuthProvider"

function Navbar() {

    const { usuario } = useContext(authContext)

    if (!usuario) {
        return(
            <main>
                <h2>Inicie sesión</h2>
            </main>
        )
    }

    return (
        <nav>
            <Link to={'/'} className="nav-link">Inicio</Link>
            <Link to={'/catalogo'} className="nav-link">Catalogo</Link>
            <Link to={'/about'} className="nav-link">Sobre Nosotros</Link>
        </nav>
    )
}

export default Navbar