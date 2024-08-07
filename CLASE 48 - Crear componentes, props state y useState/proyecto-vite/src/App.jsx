import { useState } from 'react'
import './App.css'

function Titulo(props) {
  let nombre = props.nombre
  if (nombre === '') {
    nombre = 'Anonimo'
  }
  return <p>Hola, {nombre}</p>
}

function App() {
  // esto es un HOOK
  //[valor del estado, funcion para cambiar el estado] = (estado inicial)
  const [contador, setContador] = useState(0)
  /*
  Cada vez que se actualiza el estado, se ejecuta la función
  esto es una característica de los componentes. Para guardar
  el estado hya que usar useState. porque de otra manera, no va a renderizar
  una variable que declaremos. Pj: 
  let contador = 0
  const sumar = () => {
    contador ++
  }
  */
  console.log(contador)
  const sumar = () => {
    setContador(contador + 1)
  }

  return (
    <>
      <Titulo nombre='Emi'/>
      <Titulo nombre='Cande'/>
      <button onClick={sumar}>Sumar</button>
    </>
  )
}

export default App
