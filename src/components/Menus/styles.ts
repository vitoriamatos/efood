import styled from 'styled-components'
import { Colors } from '../../styles'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const CardContainer = styled.div`
  background-color: ${Colors.red};
  border-radius: 4px;
  border: 1px solid ${Colors.red};
  padding: 8px;
  position: relative;
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-top: 16px;
  margin-bottom: 8px;
  color: ${Colors.ligthYellow};
`
export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
  color: ${Colors.ligthYellow};
  height: 160px;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Stars = styled.div`
  margin: auto 0;
  padding-right: 10px;
  display: flex;
`
export const StarsLabel = styled.h4`
  margin-right: 0px;
  color: ${Colors.ligthYellow};
`
export const StarsImage = styled.img`
  width: 21px;
  margin: auto;
`
export const Image = styled.img`
  width: 380px;
  height: 250px;
  margin: auto;

  @media (max-width: ${breakpoints.desktop}) {
    width: 100%;
    height: 250px;
  }
`
export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  &.visible {
    display: flex;
    justify-content: center;
  }
`
export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;

  @media (max-width: ${breakpoints.desktop}) {
    margin-top: 0;
  }
`

export const ModalContent = styled.div`
  max-width: 960px;
  position: relative;
  z-index: 1;
  header {
    display: flex;
    justify-content: right;
  }

  img {
    display: block;
    max-width: 100%;
  }

  @media (max-width: ${breakpoints.desktop}) {
    header {
      margin-top: 10px;
    }

    .container {
      margin-top: 0;
    }
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  opacity: 0.8;
`

export const Card = styled.div`
  background-color: ${Colors.red};
  display: flex;
  padding: 30px;

  @media (max-width: ${breakpoints.desktop}) {
    display: block;
    height: 100%;
  }
`

export const CardImage = styled.img`
  width: 450px;
  height: 300px;

  @media (max-width: ${breakpoints.desktop}) {
    height: 250px;
  }
`

export const CardText = styled.div`
  display: block;
  color: ${Colors.withe};
  margin-left: 30px;

  @media (max-width: ${breakpoints.desktop}) {
    margin-left: 0;
  }
`
export const DescriptionMenu = styled.h4`
  font-weight: 100;
  margin-top: 20px;
`
