import './App.css'
import Navbar from './components/Navbar'
import Content from './components/Content'
import { useState } from 'react'
import AuthProvider from './context/AuthProvider'

function App() {
  const [contador, setContador] = useState(0)

  const sumar = (e) => {
    if (!isNaN(e)) {
      setContador(contador + e)
      return
    }
    e.preventDefault()
    setContador(contador + 1)
  }

  if (contador > 10) {
    return (<p>Ben 10</p>)
  }

  return (
    <AuthProvider>
      <div>
        <Navbar />
        <div>
          <p>{contador}</p>
          <button onClick={sumar}>Suma 1</button>
        </div>
        <Content contador={contador}/>
      </div>
    </AuthProvider>
  )
}

export default App
