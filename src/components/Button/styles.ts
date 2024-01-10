import styled from 'styled-components'
import { Colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonContainer = styled.button`
  border: 2px solid ${Colors.withe};
  color: ${Colors.withe};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;

  :hover {
    background-color: ${Colors.darkYellow};
  }
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${Colors.withe};
  color: ${Colors.withe};
  background-color: ${Colors.red};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  margin-top: 20px;
  display: inline-block;
`
export const ButtonCart = styled.button`
  border: 2px solid ${Colors.ligthYellow};
  color: ${Colors.red};
  background-color: ${Colors.ligthYellow};
  font-size: 16px;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  text-align: center;
  margin-top: 20px;
  display: inline-block;
  width: 100%;

  :hover {
    background-color: ${Colors.darkYellow};
  }
`
