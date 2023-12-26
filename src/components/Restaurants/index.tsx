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
  stars: string
  description: string
  infos: string[]
  image: string
  button: string
}

const Restaurant = ({
  id,
  restaurant,
  stars,
  description,
  infos,
  image,
  button
}: Props) => (
  <CardContainer>
    <img src={image} alt={restaurant} />
    <Infos>
      {infos.map((info) => (
        <Tag key={info}>{info}</Tag>
      ))}
    </Infos>
    <TitleContainer>
      <Title>{restaurant}</Title>
      <Stars>
        <StarsLabel>{stars}</StarsLabel>
        <StarsImage src={star}></StarsImage>
      </Stars>
    </TitleContainer>

    <Description>{description}</Description>
    <Button type="link" title="Saiba mais2 " to={`${button}?restaurante=${id}`}>
      Saiba mais
    </Button>
  </CardContainer>
)
export default Restaurant
