import { useContext, useEffect, useState } from "react"
import { authContext } from "../context/AuthProvider"

const Content = (props) => {
    const value = useContext(authContext)

    console.log(value)

    const [parrafo, setParrafo] = useState ()

    // El primer parametro en el useEffect es un callBack y el segundo es una lista de dependencias
    useEffect(() => {
        console.log('Componente Content montado')

        // Desmontar el componente
        return () => {
            console.log('Componente Content desmontado')
        }
    }, [])

    useEffect(() => {
        console.log('Componente Content actualizado')
    }, [props, parrafo])

    const toggleParrafo = () => {
        if (parrafo === '') {
            setParrafo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat atque at consequatur et dignissimos est, fugiat vero nam laborum quasi repellendus soluta aspernatur doloremque? Provident iusto maxime culpa ipsam rerum')
        } else {
            setParrafo('')
        }
    }

    return (
        <main>
            <button onClick={toggleParrafo}>Cambia Párrafo</button>
            <p>{props.contador} | {parrafo}</p>
        </main>
    )


}

export default Content