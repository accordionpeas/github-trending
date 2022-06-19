import Heading from '../heading'
import Flex from '../flex'
import Icon from '../icon'
import Clickable from '../clickable'
import { StyledWrapper, StyledDescription, StyledLink, StyledStarCount, StyledLanguage } from './styled'

interface CardI {
  title: string
  url: string
  description: string
  starCount: number
  langugage: string | null
  languageUrl: string
  isFavourited: boolean
  onFavouriteToggle: () => void
}

const Card = ({
  title,
  url,
  description,
  starCount,
  langugage,
  languageUrl,
  isFavourited,
  onFavouriteToggle,
}: CardI) => (
  <StyledWrapper>
    <Heading level={2}>
      <StyledLink href={url} target="_blank">
        {title}
      </StyledLink>
    </Heading>
    <StyledDescription>{description}</StyledDescription>
    <Flex justify="space-between" gap="medium">
      <Flex gap="medium">
        {langugage && (
          <StyledLanguage href={languageUrl} target="_blank">
            {langugage}
          </StyledLanguage>
        )}
        <Flex gap="small">
          <Icon name="star" />
          <StyledStarCount>
            <span className="visually-hidden">Star count: </span>
            <span className="star-count">{starCount}</span>
          </StyledStarCount>
        </Flex>
      </Flex>
      <Clickable onClick={onFavouriteToggle}>
        <Icon name="heart" fill={isFavourited ? 'red' : undefined} />
        <span className="visually-hidden">{isFavourited ? 'Remove from favourites' : 'Add to favourites'}</span>
      </Clickable>
    </Flex>
  </StyledWrapper>
)

export default Card
