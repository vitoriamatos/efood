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
  Image,
  StarsLabel
} from './styles'
import Button from '../Button'

type Props = {
  id: number
  title: string
  highlighted: boolean
  type: string
  avaliation: number
  description: string
  background: string
  menu: {
    image: string
    price: number
    id: number
    name: string
    description: string
    portion: string
  }[]
}

const Restaurant = ({
  id,
  title,
  highlighted,
  type,
  avaliation,
  description,
  background,
  menu
}: Props) => (
  <CardContainer>
    <Image src={background} alt={title} width="350" />
    <Infos>
      {highlighted ? <Tag key={id}>Especial da semana</Tag> : null}
      <Tag key={id}>{type}</Tag>
    </Infos>
    <TitleContainer>
      <Title>{title}</Title>
      <Stars>
        <StarsLabel>{avaliation}</StarsLabel>
        <StarsImage src={star}></StarsImage>
      </Stars>
    </TitleContainer>

    <Description>{description}</Description>
    <Button type="link" title="Saiba mais 2" to={`/restaurante/${id}`}>
      Saiba mais
    </Button>
  </CardContainer>
)
export default Restaurant
