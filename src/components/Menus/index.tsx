import Tag from '../Tag'
import star from '../../assets/images/star.png'
import {
  CardContainer,
  Description,
  Title,
  Infos,
  TitleContainer,
  Stars,
  StarsImage,
  StarsLabel
} from './styles'
import Button from '../Button'

type Props = {
  id: number
  restaurant: string
  name: string
  value: string
  description: string
  infos: string[]
  image: string
  button: string
}

const Menu = ({
  id,
  restaurant,
  name,
  value,
  description,
  infos,
  image,
  button
}: Props) => (
  <CardContainer>
    <img src={image} alt={restaurant} />

    <TitleContainer>
      <Title>{name}</Title>
      <Stars>
        <StarsLabel>{value}</StarsLabel>
      </Stars>
    </TitleContainer>

    <Description>{description}</Description>
    <Button
      type="cart"
      title="carrinho"
      to={button + `/?restaurant=${encodeURIComponent(id)}`}
    >
      Adicionar ao carrinho
    </Button>
  </CardContainer>
)
export default Menu
