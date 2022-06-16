import 'styled-components'

interface Theme {
  spacers: {
    small: string
    medium: string
    large: string
    xl: string
  }
  colors: {
    black: string
    white: string
    red: string
    blue: string
  }
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
