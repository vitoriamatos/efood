import Restaurant from '../../pages/Home'
import Restaurants from '../Restaurants'
import { Container, List } from './styles'

type Props = {
  background: 'withe' | 'black'
  restaurants: Restaurant[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Restaurants
            key={restaurant.id}
            id={restaurant.id}
            title={restaurant.titulo}
            highlighted={restaurant.destacado}
            type={restaurant.tipo}
            avaliation={restaurant.avaliacao}
            description={restaurant.descricao}
            background={restaurant.capa}
            menu={restaurant.cardapio.map((menuItem) => ({
              image: menuItem.foto,
              price: menuItem.preco,
              id: menuItem.id,
              name: menuItem.nome,
              description: menuItem.descricao,
              portion: menuItem.porcao
            }))}
          />
        ))}
      </List>
    </div>
  </Container>
)
export default RestaurantList
