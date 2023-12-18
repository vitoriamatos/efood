import styled from 'styled-components'
import { Colors } from '../../styles'
import logo from '../../assets/images/fundo.png'

export const HeaderBar = styled.header`
  color: ${Colors.red};
  padding: 24px;
  border-radius: 16px;
`

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 8rem;
  margin-right: 8rem;
  margin-top: 20px;
`
