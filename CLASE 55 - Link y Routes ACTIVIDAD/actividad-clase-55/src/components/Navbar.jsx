import React from "react"
import Home from "./Home"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <Link to={'/'} element={<Home />}>Home</Link>
        </nav>
    )
}

export default Navbar