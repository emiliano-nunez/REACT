import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import { useCallback, useMemo, useState } from 'react'
import AuthProvider from './context/AuthProvider'
import Contador from './components/Contador'

function App() {
  const [contador, setContador] = useState(0)
 
  const sumar = () => {
    setContador(contador + 1)
  }

  // contador usando useCallback para memorizar funcioones
  // useCallback (función, array de dependencias)
  const sumaMermorizada = useCallback(() => {
    setContador(contador + 1)
  }, [contador])

  if (contador >= 10) {
    return (<p>Ben 10</p>)
  }

  // contador usando useMemo para memorizar variables, evitando la actualizacion del estado
  // useMemo (función, array de dependencias)
  const cuantoFaltaPara10Memorizado = useMemo(() => {
    return 10 - contador
  }, [contador])

  return (
    <AuthProvider>
      <div>
        <Navbar />
        <div>
          <h3>Faltan {cuantoFaltaPara10Memorizado} para Ben 10</h3>
          <p>{contador}</p>
          <button onClick={sumar}>Suma 1</button>
        </div>
        <Content contador={contador}/>
        <Contador />
      </div>
    </AuthProvider>
  )
}

export default App
