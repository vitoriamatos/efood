import Banner from '../../components/Banner'
import RestaurantList from '../../components/RestaurantsList'
import Menu from '../../models/Menu'
import restaurant2 from '../../assets/images/restaurant2.png'
import restaurant1 from '../../assets/images/restaurant1.png'
import pizza from '../../assets/images/pizza.png'
import sushi from '../../assets/images/sushi.png'
import BannerPerfil from '../../components/BannerPerfil'
import MenuList from '../../components/MenuList'
import { useLocation, useParams } from 'react-router-dom'
const Menus: Menu[] = [
  {
    id: 21,
    restaurant: 'La Dolce Vita Trattoria',
    name: 'Pizza Marguerita',
    value: 'R$14.90',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    infos: ['Destaque da semana', 'Japonesa'],
    button: '/restaurant'
  },
  {
    id: 22,
    restaurant: 'La Dolce Vita Trattoria',
    name: 'Pizza Marguerita',
    value: 'R$14.90',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    infos: ['Destaque da semana', 'Japonesa'],
    button: '/restaurant'
  },
  {
    id: 23,
    restaurant: 'La Dolce Vita Trattoria',
    name: 'Pizza Marguerita',
    value: 'R$14.90',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    infos: ['Destaque da semana', 'Japonesa'],
    button: '/restaurant'
  },
  {
    id: 24,
    restaurant: 'La Dolce Vita Trattoria',
    name: 'Pizza Marguerita',
    value: 'R$14.90',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    infos: ['Destaque da semana', 'Japonesa'],
    button: '/restaurant'
  },
  {
    id: 25,
    restaurant: 'La Dolce Vita Trattoria',
    name: 'Pizza Marguerita',
    value: 'R$14.90',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    infos: ['Destaque da semana', 'Japonesa'],
    button: '/restaurant'
  },
  {
    id: 26,
    restaurant: 'La Dolce Vita Trattoria',
    name: 'Pizza Marguerita',
    value: 'R$14.90',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizza,
    infos: ['Destaque da semana', 'Japonesa'],
    button: '/restaurant'
  },
  {
    id: 11,
    restaurant: 'Hioki Sushi',
    name: 'Carioca de Salmão',
    value: 'R$14.90',
    description:
      'O clássico Carioca: salmão, arroz enrolado com algas fritas e um toque de cream chease. Sabor e simplicidade!',
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    button: '/restaurant'
  },
  {
    id: 12,
    restaurant: 'Hioki Sushi',
    name: 'Carioca de Salmão',
    value: 'R$14.90',
    description:
      'O clássico Carioca: salmão, arroz enrolado com algas fritas e um toque de cream chease. Sabor e simplicidade!',
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    button: '/restaurant'
  },
  {
    id: 13,
    restaurant: 'Hioki Sushi',
    name: 'Carioca de Salmão',
    value: 'R$14.90',
    description:
      'O clássico Carioca: salmão, arroz enrolado com algas fritas e um toque de cream chease. Sabor e simplicidade!',
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    button: '/restaurant'
  },
  {
    id: 14,
    restaurant: 'Hioki Sushi',
    name: 'Carioca de Salmão',
    value: 'R$14.90',
    description:
      'O clássico Carioca: salmão, arroz enrolado com algas fritas e um toque de cream chease. Sabor e simplicidade!',
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    button: '/restaurant'
  },
  {
    id: 15,
    restaurant: 'Hioki Sushi',
    name: 'Carioca de Salmão',
    value: 'R$14.90',
    description:
      'O clássico Carioca: salmão, arroz enrolado com algas fritas e um toque de cream chease. Sabor e simplicidade!',
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    button: '/restaurant'
  },
  {
    id: 16,
    restaurant: 'Hioki Sushi',
    name: 'Carioca de Salmão',
    value: 'R$14.90',
    description:
      'O clássico Carioca: salmão, arroz enrolado com algas fritas e um toque de cream chease. Sabor e simplicidade!',
    image: sushi,
    infos: ['Destaque da semana', 'Japonesa'],
    button: '/restaurant'
  }
]

const Perfil = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const restaurantsName = queryParams.get('restaurante')

  // Filtra os menus pelo valor do restaurante
  const filteredMenus = Menus.filter(
    (menu) => menu.restaurant === restaurantsName
  )

  // Definição do tipo RestaurantType como uma string literal
  type RestaurantType = 'Hioki Sushi' | 'La Dolce Vita Trattoria'

  type RestaurantImageType = typeof restaurant1 | typeof restaurant2

  type RestaurantInfoType = 'Japonesa' | 'Italiana'

  const getRestaurant = (restaurants: string): RestaurantType => {
    let selectedRestaurant: RestaurantType

    if (restaurants === '1') {
      selectedRestaurant = 'Hioki Sushi'
    } else {
      selectedRestaurant = 'La Dolce Vita Trattoria'
    }

    return selectedRestaurant
  }

  const getInfo = (restaurants: string): RestaurantInfoType => {
    let selectedInfo: RestaurantInfoType

    if (restaurants === '1') {
      selectedInfo = 'Japonesa'
    } else {
      selectedInfo = 'Italiana'
    }

    return selectedInfo
  }

  const getImageRestaurant = (restaurants: string): RestaurantImageType => {
    let selectedImage: RestaurantImageType

    if (restaurants === '1') {
      selectedImage = restaurant1
    } else {
      selectedImage = restaurant2
    }

    return selectedImage
  }

  // Verifica se restaurantsName não é nulo antes de chamar getRestaurant
  const nameRestaurant = restaurantsName
    ? getRestaurant(restaurantsName)
    : 'Restaurante não especificado'

  const nameImage = restaurantsName
    ? getImageRestaurant(restaurantsName)
    : 'Caminho não especificado'

  const nameInfo = restaurantsName
    ? getInfo(restaurantsName)
    : 'Tipo não especificado'

  const filteredMenusByRestaurant = nameRestaurant
    ? Menus.filter((menu) => menu.restaurant === nameRestaurant)
    : []

  return (
    <>
      <BannerPerfil
        restaurantName={nameRestaurant}
        restaurantInfo={nameInfo}
        image={nameImage}
      />
      <MenuList menus={filteredMenusByRestaurant} />
    </>
  )
}

export default Perfil
