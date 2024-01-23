import {
  CartLink,
  HeaderBarHome,
  HeaderBarPerfil,
  HeaderHome,
  HeaderPerfil,
  HeaderPerfilContainer,
  Link,
  Logo
} from './styles'
import logo from '../../assets/images/logo.svg'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

type Props = {
  screen: 'home' | 'perfil'
}

const Header = ({ screen }: Props) => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }
  if (screen === 'perfil') {
    return (
      <HeaderBarPerfil>
        <HeaderPerfil>
          <HeaderPerfilContainer>
            <Link href="/">Restaurantes</Link>
            <Logo href="/">
              <img src={logo} alt="logo" width="125"></img>
            </Logo>
            <CartLink onClick={openCart}>
              {items.length} produto(s) no carrinho
            </CartLink>
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
