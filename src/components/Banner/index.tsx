import { Image, TextArea, Title } from './styles'
import banner from '../../assets/images/fundo.png'
import Header from '../Header'

const BannerPerfil = () => (
  <Image style={{ backgroundImage: `url(${banner})` }}>
    <div>
      <Header screen="home"></Header>
      <TextArea>
        <Title>Viva experiências gastronômicas no conforto da sua casa</Title>
      </TextArea>
    </div>
  </Image>
)

export default BannerPerfil
