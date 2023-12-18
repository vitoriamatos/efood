import { HeaderBar, HeaderContainer } from './styles'
import logo from '../../assets/images/logo.svg'
const Header = () => (
  <HeaderBar>
    <HeaderContainer>
      <a>Restaurantes</a>
      <img src={logo} alt="logo" width="125"></img>
      <a>0 produto(s) no carrinho</a>
    </HeaderContainer>
  </HeaderBar>
)
export default Header
