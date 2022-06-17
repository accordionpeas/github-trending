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
    background: #F8F9FB;
  }

  #app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .visually-hidden {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`

export default GlobalStyle
