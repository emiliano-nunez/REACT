import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import ProdDetail from './components/ProdDetail'

function App() {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/prod_detail/:id' element={<ProdDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
