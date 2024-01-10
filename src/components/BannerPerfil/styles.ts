import styled from 'styled-components'
import { Colors } from '../../styles'
import logo1 from '../../assets/images/restaurant1.png'
import logo2 from '../../assets/images/restaurante2.png'

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`
export const ContainerOverlay = styled.div`
  position: absolute;
  bottom: 10%;
  left: 18rem;
  transform: translate(-50%, -50%);
  z-index: 1;
`
export const Image = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  filter: brightness(40%);
  padding: 1px;
`

export const TitleOverlay = styled.div`
  margin-top: 6rem;
`
export const TagOverlay = styled.div`
  margin-top: -7rem;
`
export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  max-width: 600px;
  text-align: left;
  color: ${Colors.withe};
`

export const Subtitle = styled.h2`
  font-size: 36px;
  font-weight: 100;
  max-width: 600px;
  text-align: left;
  color: ${Colors.withe};
`

export const TextArea = styled.div`
  display: flex;
  justify-content: left;
`
