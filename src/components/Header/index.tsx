import {
  HeaderBarHome,
  HeaderBarPerfil,
  HeaderHome,
  HeaderPerfil,
  HeaderPerfilContainer
} from './styles'
import logo from '../../assets/images/logo.svg'

type Props = {
  screen: 'home' | 'perfil'
}

const Header = ({ screen }: Props) => {
  if (screen === 'perfil') {
    return (
      <HeaderBarPerfil>
        <HeaderPerfil>
          <HeaderPerfilContainer>
            <a>Restaurantes</a>
            <img src={logo} alt="logo" width="125"></img>
            <a>0 produto(s) no carrinho</a>
          </HeaderPerfilContainer>
        </HeaderPerfil>
      </HeaderBarPerfil>
    )
  }

  return (
    <HeaderBarHome>
      <HeaderHome>
        <img src={logo} alt="logo" width="125"></img>
      </HeaderHome>
    </HeaderBarHome>
  )
}
export default Header
