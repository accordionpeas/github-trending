import { createGlobalStyle } from 'styled-components'
import { normalize } from 'styled-normalize'

const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    line-height: 1.4;
  }

  body {
    font-family: "IBM Plex Sans", Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
`

export default GlobalStyle
