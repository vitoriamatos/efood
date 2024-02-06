import { useEffect, useState } from 'react'
import BannerPerfil from '../../components/BannerPerfil'
import MenuList from '../../components/MenuList'
import { useParams } from 'react-router-dom'
import { useGetFeaturedRestaurantQuery } from '../../services/api'
import Loader from '../../components/Loader'
type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }[]
}

type MenuItem = {
  image: string
  price: number
  id: number
  name: string
  description: string
  portion: string
  idRestaurant: number
}

const Perfil = () => {
  // const [restaurant, setRestaurant] = useState<Restaurant[]>([])
  const { data: restaurant, isLoading } = useGetFeaturedRestaurantQuery()
  const [restaurantDetail, setRestaurantDetail] = useState<Restaurant | null>(
    null
  )
  // const [restaurant, setRestaurant] = useState<Restaurant[]>([])
  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (id) {
      const restaurantId = parseInt(id, 10)
      if (restaurant) {
        const selectedRestaurant = restaurant.find((r) => r.id === restaurantId)
        setRestaurantDetail(selectedRestaurant || null)
      }
    }
  }, [id, restaurant])

  if (restaurant) {
    return (
      <>
        {restaurantDetail && (
          <>
            <BannerPerfil
              restaurantName={restaurantDetail.titulo}
              restaurantInfo={restaurantDetail.tipo}
              image={restaurantDetail.capa}
            />
            <MenuList
              menus={mapToMenuItem(
                restaurantDetail.cardapio,
                restaurantDetail.id
              )}
            />
          </>
        )}
      </>
    )
  }

  return <Loader />
}

export default Perfil

const mapToMenuItem = (
  cardapio: Restaurant['cardapio'],
  idRestaurant: number
): MenuItem[] => {
  return cardapio.map((item) => ({
    image: item.foto,
    price: item.preco,
    id: item.id,
    name: item.nome,
    description: item.descricao,
    portion: item.porcao,
    idRestaurant
  }))
}
