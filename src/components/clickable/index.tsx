import { ReactNode } from 'react'
import { StyledClickable } from './styled'

interface ClickableI {
  className?: string
  children: ReactNode
  onClick: () => void
}

const Clickable = ({ className, children, onClick }: ClickableI) => (
  <StyledClickable className={className} onClick={onClick}>
    {children}
  </StyledClickable>
)

export default Clickable
