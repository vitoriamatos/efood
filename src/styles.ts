import { createGlobalStyle } from 'styled-components'

const Colors = {
  withe: '#FFF',
  ligthOrgange: '#FFF8F2',
  red: '#E66767'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
  }

  body{
    background-color: ${Colors.ligthOrgange}
  }
`
