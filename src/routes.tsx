import Categories from './pages/Categories'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categorias" element={<Categories />} />
  </Routes>
)
export default Rotas
