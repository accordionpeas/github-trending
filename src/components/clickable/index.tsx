import { ReactNode } from 'react'
import { StyledClickable } from './styled'

interface ClickableI {
  children: ReactNode
  onClick: () => void
}

const Clickable = ({ children, onClick }: ClickableI) => <StyledClickable onClick={onClick}>{children}</StyledClickable>

export default Clickable
