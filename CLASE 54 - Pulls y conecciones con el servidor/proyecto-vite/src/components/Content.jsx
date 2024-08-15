import { useEffect, useState } from "react"
import Card from "./Card"

const Content = () => {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error + "Error al obtener la ifo de los productos"))
            .finally(() => setLoading(false))
    }, [])

    console.log(products);

    if (loading) {
        return (<p>Cargando productos...</p>)
    }

    return (
        <main>
            {products.map(item => <Card key={item.id} product={item}/>)}
        </main>
    )
}

export default Content