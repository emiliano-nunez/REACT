import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

    const [product, setProduct] = useState({})

    const {id} = useParams()

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.log(error + "Error al obtener el producto"))
    }, [])

    return (
        <div className='detail'>
            <h1>Detalle del producto</h1>
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
        </div>
    )
}

export default Detail