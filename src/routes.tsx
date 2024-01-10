import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from './pages/Perfil'
// import Product from './pages/Product'

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurante/:id" element={<Perfil />} />
    {/* <Route path="/product/:id" element={<Product />} /> */}
  </Routes>
)

export default RoutesMain
