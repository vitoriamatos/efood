import Restaurants from '../Menus'
import { Container, List } from './styles'
import Menu from '../../models/Menu'
type Props = {
  menus: Menu[]
}
const MenuList = ({ menus }: Props) => (
  <Container>
    <div className="container">
      <List>
        {menus.map((menu) => (
          <Restaurants
            key={menu.id}
            id={menu.id}
            restaurant={menu.restaurant}
            name={menu.name}
            value={menu.value}
            description={menu.description}
            image={menu.image}
            infos={menu.infos}
            button={menu.button}
          />
        ))}
      </List>
    </div>
  </Container>
)
export default MenuList
