import styled from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const Container = styled.section`
  padding: 32px 0;
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 42px;
  row-gap: 42px;
  margin-top: 40px;
  list-style-type: none;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
