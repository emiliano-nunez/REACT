import './App.css'

function App() {

  let nombre = 'Emi'
  if (nombre === '') {
    nombre = 'Anonimo'
  }

  function saludar() {
    alert(`Hola, ${nombre}`)
  }

  return (
    <>
      <div className='dark'>
        <p>Hola, {nombre}</p>
      </div>
      <button onClick={saludar}>Saludame</button>
    </>
  )
}

export default App
