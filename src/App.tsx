import React from 'react'
import { GlobalCss } from './styles'
import {
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Perfil from './pages/Perfil'

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/perfil" element={<Perfil />} />
  </Routes>
)
function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className=""> </div>
      <RoutesMain />
      <Footer />
    </BrowserRouter>
  )
}

export default App
