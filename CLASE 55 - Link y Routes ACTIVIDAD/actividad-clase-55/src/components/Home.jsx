import React, { useEffect, useState } from "react"
import Product from "./Product"
const Home = () => {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error + "Error al obtener la ifo de los productos"))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return (<p className="loading">Loading...</p>)
    }

    return (
        <main className='container'>
            {products.map(item => <Product key={item.id} product={item}/>)}
        </main>
    )
}

export default Home