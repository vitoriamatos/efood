import React from 'react'
import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'

import Footer from './components/Footer'

import RoutesMain from './routes'
// import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className=""> </div>
      <RoutesMain />
      <Footer />
      {/* <Cart /> */}
    </BrowserRouter>
  )
}

export default App
