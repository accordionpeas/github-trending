import Heading from '../heading'
import Flex from '../flex'
import Icon from '../icon'
import Clickable from '../clickable'
import { StyledWrapper, StyledDescription, StyledLink, StyledStarCount } from './styled'

interface CardI {
  title: string
  url: string
  description: string
  starCount: number
  isFavourited: boolean
  onFavouriteToggle: () => void
}

const Card = ({ title, url, description, starCount, isFavourited, onFavouriteToggle }: CardI) => (
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
        <StyledStarCount>
          <span className="visually-hidden">Star count: </span>
          {starCount}
        </StyledStarCount>
      </Flex>
      <Clickable onClick={onFavouriteToggle}>
        <Icon name="heart" fill={isFavourited ? 'red' : undefined} />
        <span className="visually-hidden">{isFavourited ? 'Remove from favourites' : 'Add to favourites'}</span>
      </Clickable>
    </Flex>
  </StyledWrapper>
)

export default Card
