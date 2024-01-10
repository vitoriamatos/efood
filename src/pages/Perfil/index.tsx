import { useEffect, useState } from 'react'
import BannerPerfil from '../../components/BannerPerfil'
import MenuList from '../../components/MenuList'
import { useParams } from 'react-router-dom'

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
}

const Perfil = () => {
  const [restaurant, setRestaurant] = useState<Restaurant[]>([])
  const [restaurantDetail, setRestaurantDetail] = useState<Restaurant | null>(
    null
  )

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [])

  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    if (id) {
      const restaurantId = parseInt(id, 10)
      const selectedRestaurant = restaurant.find((r) => r.id === restaurantId)
      setRestaurantDetail(selectedRestaurant || null)
    }
  }, [id, restaurant])

  return (
    <>
      {restaurantDetail && (
        <>
          <BannerPerfil
            restaurantName={restaurantDetail.titulo}
            restaurantInfo={restaurantDetail.tipo}
            image={restaurantDetail.capa}
          />
          <MenuList menus={mapToMenuItem(restaurantDetail.cardapio)} />
        </>
      )}
    </>
  )
}

export default Perfil

const mapToMenuItem = (cardapio: Restaurant['cardapio']): MenuItem[] => {
  return cardapio.map((item) => ({
    image: item.foto,
    price: item.preco,
    id: item.id,
    name: item.nome,
    description: item.descricao,
    portion: item.porcao
  }))
}
