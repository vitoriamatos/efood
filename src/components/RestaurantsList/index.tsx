import Restaurants from '../Restaurants'
import { Container, List } from './styles'
import Restaurant from '../../models/Restaurant'
type Props = {
  background: 'withe' | 'black'
  restaurants: Restaurant[]
}
const RestaurantList = ({ background, restaurants }: Props) => (
  <Container>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Restaurants
            key={restaurant.id}
            id={restaurant.id}
            restaurant={restaurant.restaurant}
            stars={restaurant.stars}
            description={restaurant.description}
            image={restaurant.image}
            infos={restaurant.infos}
            button={restaurant.button}
          />
        ))}
      </List>
    </div>
  </Container>
)
export default RestaurantList
