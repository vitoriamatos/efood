import Banner from '../../components/Banner'
import RestaurantList from '../../components/RestaurantsList'
import { useEffect, useState } from 'react'
import { useGetFeaturedRestaurantQuery } from '../../services/api'
type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

const Restaurant = () => {
  const { data: restaurant, isLoading } = useGetFeaturedRestaurantQuery()
  // const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  if (restaurant) {
    return (
      <>
        <Banner />
        <RestaurantList restaurants={restaurant} background="withe" />
      </>
    )
  }

  return <h4>Carregando...</h4>
}
export default Restaurant
