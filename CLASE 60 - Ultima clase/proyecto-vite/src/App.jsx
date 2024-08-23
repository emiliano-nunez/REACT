import './App.css'
import About from './components/About'
import Content from './components/Content'
import Detail from './components/Detail'
import Login from './components/Login'
import Navbar from './components/Navbar'
import AuthProvider from './context/AuthProvider'
import ErrorContext from './context/ErrorContext'

//LIBRERÍAS
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <ErrorContext>
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
    </ErrorContext>
  )
}

export default App
