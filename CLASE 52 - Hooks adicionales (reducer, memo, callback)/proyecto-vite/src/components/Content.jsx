import { useState, useTransition } from "react"
//import { authContext } from "../context/AuthProvider"

const Content = (props) => {
    const [parrafo, setParrafo] = useState ()

    const [isLoading, startTransition] = useTransition(false)
    // const value = useContext(authContext)

    // console.log(value)



    // // El primer parametro en el useEffect es un callBack y el segundo es una lista de dependencias
    // useEffect(() => {
    //     console.log('Componente Content montado')

    //     // Desmontar el componente
    //     return () => {
    //         console.log('Componente Content desmontado')
    //     }
    // }, [])

    // useEffect(() => {
    //     console.log('Componente Content actualizado')
    // }, [props, parrafo])

    const toggleParrafo = () => {
        startTransition(() => {
            if (parrafo === '') {
                setParrafo('Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat atque at consequatur et dignissimos est, fugiat vero nam laborum quasi repellendus soluta aspernatur doloremque? Provident iusto maxime culpa ipsam rerum')
            } else {
                setParrafo('')
            }
        })
    }

    if (isLoading) {
        <h2>Cambiando párrafo...</h2>
    }

    return (
        <main>
            <button onClick={toggleParrafo}>Cambia Párrafo</button>
            <p>{props.contador} | {parrafo}</p>
        </main>
    )


}

export default Content