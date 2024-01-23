import Cart from '../Cart'
import Menus from '../Menus'
import { Container, List } from './styles'

type Props = {
  menus: {
    image: string
    price: number
    id: number
    name: string
    description: string
    portion: string
    idRestaurant: number
  }[]
}
const MenuList = ({ menus }: Props) => (
  <>
    <Container>
      <div className="container">
        <List>
          {menus.map((menu) => (
            <Menus
              key={menu.id}
              id={menu.id}
              name={menu.name}
              price={menu.price}
              description={menu.description}
              image={menu.image}
              portion={menu.portion}
              idRestaurant={menu.idRestaurant}
            />
          ))}
        </List>
      </div>
    </Container>
    <Cart />
  </>
)
export default MenuList
