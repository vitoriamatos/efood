import styled from 'styled-components'
import { Colors } from '../../styles'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;
  &.is-open {
    display: flex;
  }
`
export const Sidebar = styled.aside`
  background-color: ${Colors.red};
  z-index: 1;
  padding: 40px 16px 0 16px;
  overflow-y: auto;

  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
  header {
    display: none;
  }

  @media (max-width: ${breakpoints.desktop}) {
    header {
      display: flex;
      justify-content: right;
      padding-bottom: 20px;
    }

    overflow-y: auto;
  }
`
export const Prices = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${Colors.withe};
  margin-bottom: 24px;
  span {
    display: block;
    font-size: 12px;
    color: ${Colors.darkYellow};
  }
`
export const Quantity = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${Colors.withe};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const TextContainer = styled.div`
  display: block;
  margin-left: 20px;
  width: 100%;
`

export const CartList = styled.div`
  background-color: ${Colors.ligthYellow};
  padding: 10px;
  display: flex;
  margin-top: 20px;
  list-style-type: none;
  position: relative;
  footer {
    display: flex;
    justify-content: right;
  }
`

export const List = styled.li`
  list-style-type: none;
`
export const Title = styled.h3`
  color: ${Colors.red};
  font-weight: bold;
  margin-bottom: 20px;
  margin-top: 20px;
`

export const Price = styled.h4`
  color: ${Colors.red};
  font-weight: 400;
`
export const Image = styled.img`
  width: 200px;
`

export const TrashImage = styled.img`
  display: flex;
  justify-content: right;
  position: absolute;
  bottom: 20px;
  width: 5%;
`

export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
