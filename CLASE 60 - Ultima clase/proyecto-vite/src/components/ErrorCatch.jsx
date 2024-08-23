import React from 'react'

//Componente de orden superior. recibe children como props
// envuelve la app
function ErrorCatch({children}) {
    // Retornamos el children para manejar los errores de manera global
    try {
        return children
    } catch (error) {
        console.log(error)
    }
}


export default ErrorCatch
