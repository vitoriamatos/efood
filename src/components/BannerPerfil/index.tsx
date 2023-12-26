import {
  ContainerOverlay,
  Image,
  ImageContainer,
  Subtitle,
  TagOverlay,
  TextArea,
  Title,
  TitleOverlay
} from './styles'
import banner from '../../assets/images/restaurant1.png'
import Header from '../Header'
import Tag from '../Tag'
import Restaurant from '../../models/Restaurant'

type Props = {
  restaurantName: string
  restaurantInfo: string
  image?: string
}

const BannerPerfil = ({ restaurantName, restaurantInfo, image }: Props) => (
  <>
    <Header screen="perfil"></Header>
    <ImageContainer>
      <Image style={{ backgroundImage: `url(${image})` }} />
      <ContainerOverlay>
        <TagOverlay>
          <Subtitle>{restaurantInfo}</Subtitle>
        </TagOverlay>
        <TitleOverlay>
          <TextArea>
            <Title>{restaurantName}</Title>
          </TextArea>
        </TitleOverlay>
      </ContainerOverlay>
    </ImageContainer>
  </>
)

export default BannerPerfil
