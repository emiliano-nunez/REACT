import { useContext } from "react"
import { authContext } from "../context/AuthProvider"
import { Link } from "react-router-dom"

function Navbar() {
    const usuario = useContext(authContext)

    const links = [
        {
            url: '#',
            title: 'Home'
        },
        {
            url: '#products',
            title: 'Products'
        },
        {
            url: '#contact',
            title: 'Contact'
        },
        {
            url: '/profile',
            title: `Perfil de ${usuario}` // estado global del contexto
        }
    ]

    return (
        <nav>
            <Link to={'/'} className="nav-link">Inicio</Link>
            <Link to={'/detail'} className="nav-link">Detalle</Link>
            <Link to={'/about'} className="nav-link">Sobre Nosotros</Link>
        </nav>
    )
}

export default Navbar