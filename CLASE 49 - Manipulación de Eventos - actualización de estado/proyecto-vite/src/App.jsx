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
  const [user, setUser] = useState('Quién es el mejor?')
  const [mensaje, setMensaje] = useState('')

  const sumar = (e) => {
    if (!isNaN(e)) {
      setContador(contador + e)
      // Este return corta el flujo de la función (cortocircuito, return temprano)
      return
    }

    // Por defecto, si la función no tiene parámetros, el parámetro 'e' 
    // contiene la información del evento

    console.log(e)
    e.preventDefault()

    // Al sumar uno, sólo se llama a la función, sin especificar un número, entonces
    // la función interpreta que debe mostrar la info
    setContador(contador + 1)
    setUser('El mejor es CandeEmi')
  }

  const tecla = (e) => {
    const name = e.target.value
    setUser(name)
  }

  const verificarNombre = (e) => {
    e.preventDefault()
    alert('Nombre verificado')
  }

  const advertirSalida = () => {
    setMensaje('Advertencia de salida')
  }

  const reiniciarFoco = () => {
    setMensaje('')
  }

  const handleSize = (e) => {
    console.log(e)
  }

  const handleDrag = (e) => {
    console.log(e)
  }

  return (
    <div onResize={handleSize}>
      <fieldset>
        <Titulo nombre='Cande'/>
      </fieldset>
      <fieldset>
        <fieldset>
          <p>{user}</p>
          <p>{contador}</p>
        </fieldset>
        <fieldset>
          <button onClick={sumar}>Suma 1</button>
          <button onClick={() => sumar(5)}>Suma 5</button>
        </fieldset>
      </fieldset>
      <fieldset>
        <form onSubmit={verificarNombre} onDragStart={handleDrag}>
          <label htmlFor="name">Nombre de usuario</label>
          {/*<input id="name" type="text" onKeyDown={tecla} onKeyUp={() => console.log('UEPA!')}/>*/}
          <input id="name" type="text" onChange={tecla} onBlur={advertirSalida} onFocus={reiniciarFoco}/>
          <button>Verificar</button>
          <span>{mensaje}</span>
        </form>
      </fieldset>
    </div>
  )
}

export default App
