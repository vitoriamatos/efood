import React from 'react'

import { GlobalCss } from './styles'
import Header from './components/Header'
import Banner from './components/Banner'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Restaurant from './components/Restaurants'
import RestaurantList from './components/RestaurantsList'

const routes = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <RestaurantList background="withe" />
      </>
    )
  }
])
function App() {
  return (
    <>
      <GlobalCss />
      <div className=""> </div>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
