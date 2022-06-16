import Star from './svgs/star'
import Heart from './svgs/heart'
import { StyledWrapper } from './styled'
import { colors } from '../../styles/theme'

const icons = {
  star: Star,
  heart: Heart,
}

interface IconI {
  name: keyof typeof icons
  fill?: keyof typeof colors
}

const Icon = ({ name, fill }: IconI) => {
  const SVG = icons[name]

  return (
    <StyledWrapper fill={fill}>
      <SVG />
    </StyledWrapper>
  )
}

export default Icon
