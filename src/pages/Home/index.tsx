import Banner from '../../components/Banner'
import RestaurantList from '../../components/RestaurantsList'
import restaurant2 from '../../assets/images/restaurant2.png'
import restaurant1 from '../../assets/images/restaurant1.png'
import { useEffect, useState } from 'react'
import Restaurants from '../../components/Restaurants'

type Restaurant = {
  id: number;
  titulo: string;
  destacado: boolean;
  tipo: string;
  avaliacao: number;
  descricao: string;
  capa: string;
  cardapio: [{
    foto: string;
    preco: number;
    id: number;
    nome: string;
    descricao: string;
    porcao: string;
  }]
}

const Restaurant = () => {
  const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(res => res.json()).then(res => setRestaurant(res))
  }, [])
  return (
    <>
      <Banner />
      <RestaurantList restaurants={restaurant} background="withe" />
    </>
  )
}
export default Restaurant
