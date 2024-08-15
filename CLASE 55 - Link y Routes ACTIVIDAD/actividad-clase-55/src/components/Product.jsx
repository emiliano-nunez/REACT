import React from "react"
import { Link } from "react-router-dom"

const Product = ({product}) => {
    
    return (
        <div className="product">
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <p>${product.price}</p>
            <Link className="btnBuy" to={`/prod_detail/${product.id}`}>Buy</Link>
        </div>
    )
}

export default Product