import styled from 'styled-components'
import { Colors } from '../../styles'

export const Container = styled.footer`
  background-color: ${Colors.ligthYellow};
  color: ${Colors.red};
  text-align: center;
  padding: 32px 0;
`
export const List = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 4rem;
`
export const ListItem = styled.li`
  margin-left: 10px;
`
export const FooterContainer = styled.div`
  margin-top: 3rem;
`
export const Description = styled.p`
  font-size: 18px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  color: ${Colors.red};
  text-align: center;
`
