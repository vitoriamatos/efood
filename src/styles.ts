import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const Colors = {
  withe: '#FFF',
  ligthOrgange: '#FFF8F2',
  ligthYellow: '#FFEBD9',
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
    background-color: ${Colors.ligthOrgange};

  }

  .container{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
