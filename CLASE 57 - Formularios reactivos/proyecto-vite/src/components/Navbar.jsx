import React from "react"
import { Link } from "react-router-dom"

function Navbar() {

    return (
        <nav>
            <Link to={'/'} className="nav-link">Inicio</Link>
            <Link to={'/detail'} className="nav-link">Detalle</Link>
            <Link to={'/about'} className="nav-link">Sobre Nosotros</Link>
        </nav>
    )
}

export default Navbar