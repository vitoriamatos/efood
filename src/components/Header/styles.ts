import styled from 'styled-components'
import { Colors } from '../../styles'
import logo from '../../assets/images/fundo.png'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const HeaderBarHome = styled.header`
  color: ${Colors.red};
  padding: 24px;
  border-radius: 16px;
`
export const HeaderBarPerfil = styled.header`
  color: ${Colors.red};
  border-radius: 16px;
`
export const HeaderHome = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 8rem;
  margin-right: 8rem;
  margin-top: 20px;
`

export const HeaderPerfil = styled.div`
  background-image: url(${logo});
  width: 100%;
  padding: 40px;
  display: flex;
  justify-content: center;
`
export const HeaderPerfilContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24rem;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
export const Link = styled.a`
  text-decoration: none;
  color: ${Colors.red};

  @media (max-width: ${breakpoints.desktop}) {
    display: none;
  }
`

export const CartLink = styled.a`
  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 30px;
  }
`
export const Logo = styled.a`
  @media (max-width: ${breakpoints.desktop}) {
    display: flex;
    justify-content: center;
  }
`
