import { ReactNode } from 'react'
import { StyledH1, StyledH2 } from './styled'

const levels = {
  1: StyledH1,
  2: StyledH2,
}

interface HeadingI {
  children: ReactNode
  level: keyof typeof levels
}

const Heading = ({ children, level }: HeadingI) => {
  const Component = levels[level]

  return <Component>{children}</Component>
}

export default Heading
