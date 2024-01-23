import styled from 'styled-components'
import { Colors } from '../../styles'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const Image = styled.div`
  width: 100%;
  height: 300px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;

  @media (max-width: ${breakpoints.desktop}) {
    height: 350px;
  }
`
export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 600px;
  text-align: center;
  color: ${Colors.red};

  @media (max-width: ${breakpoints.desktop}) {
    font-size: 25px;
    max-width: 300px;
    margin-bottom: 20px;
  }
`

export const TextArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`
