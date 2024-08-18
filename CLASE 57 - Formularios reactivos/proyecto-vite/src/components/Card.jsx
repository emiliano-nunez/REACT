import React from "react"
import { Link } from "react-router-dom"

const Card = ({product}) => {
    return (
        <div className="card">
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <Link to={`/detail/${product.id}`} className="btn-detail">Ver detalle</Link>
        </div>
    )
}

export default Card