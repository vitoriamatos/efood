import {
  Container,
  FooterContainer,
  List,
  ListItem,
  Description
} from './styles'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import tweet from '../../assets/images/twitter.svg'
import instagram from '../../assets/images/instagram.svg'
const Footer = () => (
  <Container>
    <div className="container">
      <FooterContainer>
        <img src={logo}></img>
        <List>
          <ListItem>
            <img src={instagram}></img>
          </ListItem>
          <ListItem>
            <img src={facebook}></img>
          </ListItem>
          <ListItem>
            <img src={tweet}></img>
          </ListItem>
        </List>
        <Description>
          A efood é uma plataforma para divulgação de estabelecimentos, a
          responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.{' '}
        </Description>
      </FooterContainer>
    </div>
  </Container>
)

export default Footer
