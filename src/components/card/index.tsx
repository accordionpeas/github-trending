import Heading from '../heading'
import Flex from '../flex'
import Icon from '../icon'
import { StyledWrapper, StyledDescription, StyledLink, StyledStarCount } from './styled'

interface CardI {
  title: string
  url: string
  description: string
  starCount: number
  isFavourited: boolean
}

const Card = ({ title, url, description, starCount, isFavourited }: CardI) => (
  <StyledWrapper>
    <Heading level={2}>
      <StyledLink href={url} target="_blank">
        {title}
      </StyledLink>
    </Heading>
    <StyledDescription>{description}</StyledDescription>
    <Flex justify="space-between" gap="medium">
      <Flex gap="small">
        <Icon name="star" />
        <StyledStarCount>{starCount}</StyledStarCount>
      </Flex>
      <Icon name="heart" fill={isFavourited ? 'red' : undefined} />
    </Flex>
  </StyledWrapper>
)

export default Card
