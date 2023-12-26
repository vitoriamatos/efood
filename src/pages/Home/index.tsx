import Banner from '../../components/Banner'
import RestaurantList from '../../components/RestaurantsList'
import Restaurant from '../../models/Restaurant'
import restaurant2 from '../../assets/images/restaurant2.png'
import restaurant1 from '../../assets/images/restaurant1.png'
const Restaurants: Restaurant[] = [
  {
    id: 1,
    restaurant: 'Hioki Sushi',
    stars: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    image: restaurant1,
    infos: ['Destaque da semana', 'Japonesa'],
    button: '/perfil'
  },
  {
    id: 2,
    restaurant: 'La Dolce Vita Trattoria',
    stars: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: restaurant2,
    infos: ['Italiana'],
    button: '/perfil'
  },
  {
    id: 2,
    restaurant: 'La Dolce Vita Trattoria',
    stars: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: restaurant2,
    infos: ['Italiana'],
    button: '/perfil'
  },
  {
    id: 2,
    restaurant: 'La Dolce Vita Trattoria',
    stars: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: restaurant2,
    infos: ['Italiana'],
    button: '/perfil'
  },
  {
    id: 2,
    restaurant: 'La Dolce Vita Trattoria',
    stars: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: restaurant2,
    infos: ['Italiana'],
    button: '/perfil'
  },
  {
    id: 2,
    restaurant: 'La Dolce Vita Trattoria',
    stars: '4.9',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    image: restaurant2,
    infos: ['Italiana'],
    button: '/perfil'
  }
]

const Home = () => (
  <>
    <Banner />
    <RestaurantList restaurants={Restaurants} background="withe" />
  </>
)
export default Home
