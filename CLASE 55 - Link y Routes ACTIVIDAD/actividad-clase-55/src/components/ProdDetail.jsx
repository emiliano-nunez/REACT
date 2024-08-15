import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProdDetail = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams()

    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error + "Error al obtener el producto"))
            .finally(() => setLoading(false))
    }, [])
    
    if (loading) {
        return (<p className="loading">Loading...</p>)
    }

    return (
        <div className='product-detail'>
            <h1>{product.title}</h1>
            <h2>{product.category}</h2>
            <div>
                <img src={product.image} alt={product.title} />
            </div>
            <p>${product.price}</p>    
            <p>{product.description}</p>
        </div>
    )
}

export default ProdDetail