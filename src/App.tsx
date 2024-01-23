import { Provider } from 'react-redux'
import React from 'react'
import { GlobalCss } from './styles'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import RoutesMain from './routes'
import { store } from './store'
import Cart from './components/Cart'
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className=""> </div>
        <RoutesMain />
        <Footer />
      </BrowserRouter>
    </Provider>
  )
}

export default App
