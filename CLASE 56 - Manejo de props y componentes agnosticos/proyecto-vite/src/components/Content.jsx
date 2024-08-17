import { useEffect, useState } from "react"
import Card from "./Card"
import Button from "./Button"
import Input from "./Input"

const Content = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [hizoClick, setHizoClick] = useState(false)
    const [filterProducts, setFilterProducts] = useState([])

    const handleButtonClick = () => {
        setHizoClick(true)
    }

    const handleProductsFilter = (e) => {
        const inputValue = e.target.value
        if (inputValue) {
            const filtered = products.filter(item => item.title.includes(inputValue))            
            setFilterProducts(filtered)
        } else {
            setFilterProducts([])
        }
    }

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error + "Error al obtener la ifo de los productos"))
            .finally(() => setLoading(false))
    }, [])

    if (loading) {
        return (<p>Cargando Contenido...</p>)
    }

    return (
        <main>
            <div>
                <Input handleChange={handleProductsFilter}/>
            </div>
            <Button handleClick={handleButtonClick} text={'ola'}/>
            <Button text={'lola'}/>
            <p>Hizo Click: {hizoClick ? 'si' : 'no'}</p>
            {filterProducts.length > 0
                ? filterProducts.map(item => <Card key={item.id} product={item}/>)
                : products.map(item => <Card key={item.id} product={item}/>)
            }
        </main>
    )
}

export default Content