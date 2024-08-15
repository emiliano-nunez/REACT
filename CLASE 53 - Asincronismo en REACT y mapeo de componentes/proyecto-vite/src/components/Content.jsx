import { useEffect, useState } from "react"
import Card from "./Card"



const Content = () => {

    const [products, setProducts] = useState([])

    const [loading, setLoading] = useState(true)

    // para recursos INTERNOS
    const getProducts = new Promise((resolve, reject) => {
        // ejecutmos todo el proceso asícrono para retornar la info
        // usamos el resolve()

        // en caso de tener un error usamos el reject()
    })

    // para recursos EXTERNOS
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