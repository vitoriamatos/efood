import Restaurants from '../Restaurants'
import { Container, List } from './styles'
import restaurant2 from '../../assets/images/image 1.png'
import restaurant1 from '../../assets/images/imagem.png'
type Props = {
  background: 'withe' | 'black'
}
const RestaurantList = ({ background }: Props) => (
  <Container>
    <div className="container">
      <List>
        <Restaurants
          restaurant="Hioki Sushi"
          stars="4.9"
          description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!"
          image={restaurant1}
          infos={['Destaque da Semana', 'Japonesa']}
          button="/restaurante"
        />
        <Restaurants
          restaurant="La Dolce Vita Trattoria"
          stars="4.6"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={restaurant2}
          infos={['Italiana']}
          button="/restaurante"
        />
        <Restaurants
          restaurant="La Dolce Vita Trattoria"
          stars="4.6"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={restaurant2}
          infos={['Italiana']}
          button="/restaurante"
        />
        <Restaurants
          restaurant="La Dolce Vita Trattoria"
          stars="4.6"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={restaurant2}
          infos={['Italiana']}
          button="/restaurante"
        />
        <Restaurants
          restaurant="La Dolce Vita Trattoria"
          stars="4.6"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={restaurant2}
          infos={['Italiana']}
          button="/restaurante"
        />
        <Restaurants
          restaurant="La Dolce Vita Trattoria"
          stars="4.6"
          description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
          image={restaurant2}
          infos={['Italiana']}
          button="/restaurante"
        />
      </List>
    </div>
  </Container>
)
export default RestaurantList
