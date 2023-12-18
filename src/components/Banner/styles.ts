import styled from 'styled-components'
import { Colors } from '../../styles'

export const Image = styled.div`
  width: 100%;
  height: 300px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
`
export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 600px;
  text-align: center;
  color: ${Colors.red};
`

export const TextArea = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`
