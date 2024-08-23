import './App.css'
import About from './components/About'
import Content from './components/Content'
import Detail from './components/Detail'
import Login from './components/Login'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthProvider'

//LIBRERÍAS
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/catalogo' element={<Content />} />
          <Route path='/detail/:id' element={<Detail/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
